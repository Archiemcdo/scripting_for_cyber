#!/bin/bash

IPV6=$(ip a | grep inet6 | grep -v "::1" | awk '{print $2}' | head -n 1)

echo $IPV6 > ipv6.txt

HASH=$(sha256sum ipv6.txt | awk '{print $1}')

echo "******************************************"
echo
echo "IPV6 Address = $IPV6"
echo
echo "Sha256 = $HASH"
echo
echo "******************************************"
