# ---- checking env file ----
echo "[Check]: Looking for already present .env file"
if [ ! -f $(pwd)/../.env ]
then
echo "[Check]: .env file not found"
echo "[Check]: Creating .env file"
cp $(pwd)/../.env.example $(pwd)/../.env
echo "[check]: .env file created"
else
echo "[Check]: .env file found"
echo "[Check]: skipping creation"
fi
