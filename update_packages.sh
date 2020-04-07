#!/usr/bin/env bash

main() {
    local package_json
    declare -a directories=()
    local target

    while read package_json; do
        echo "--> $package_json"
        directories+=($(dirname $package_json))
    done < <(find . -mindepth 4 -maxdepth 4 -name package.json)

    for target in "${directories[@]}"; do
        echo "@ Updating $target @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@"
        pushd "$target"
        npm-check-updates -u
        rm -f package-lock.json
        popd
    done

    for target in "${directories[@]}"; do
        pushd "$target"
        npm install
        popd
    done

    local test_server_pid=
    for target in "${directories[@]}"; do
        if [[ "$target" == "./1-basic-react/00_start_point/react-tutorial" ]]; then
            continue
        fi
        echo "# Testing $target ###########################################"
        pushd "$target"
        if [[ -f ./test_server.js ]]; then
            echo "Running test_server.js..."
            node ./test_server.js &
            test_server_pid=$!
        fi
        npm start
        if [[ -f ./test_server.js ]]; then
            kill $test_server_pid
            sleep 0.2
        fi
        popd
    done
}

main "$@"

