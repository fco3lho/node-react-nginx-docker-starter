# For Ubuntu distros
docker system prune --all
sudo rm -r /var/lib/docker/overlay2/
sudo rm -r /var/lib/docker/image
sudo rm -r /var/lib/docker/devicemapper
sudo systemctl restart docker