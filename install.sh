
echo "--- Begin of install.sh ---"

destDir="/opt/bridgeLcsToDaeri"

echo "[Note] Run npm, please wait"
cd "$destDir"
npm run prod

echo "--- End of install.sh ---"
