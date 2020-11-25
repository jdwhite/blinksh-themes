#!/bin/bash
#
# colors.sh - display color combinations, suitable
#             for making blinksh theme screenshots.
#
# Jason White <jdwhite@menelos.com>
#
IFS=$'\n'
for colhdr in '    ' ' ' 4{0..7}m; do
	printf " \033[m %3s " $colhdr
done
unset IFS
echo
for fg in '' 1 {,1\;}31 {,1\;}32 {,1\;}33 {,1\;}34 {,1\;}35 {,1\;}36 {,1\;}37 ; do
	printf "\033[m %5s \033[m" "${fg}m"
	for bg in '' \;{40..47}; do
		printf " \033[${fg}${bg}m %3s \033[m" "gYw"
	done
	echo
done

