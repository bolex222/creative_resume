# creative_resume


## netsh portproxy coamands

```shell
# remove previous portproxy
netsh interface portproxy delete v4tov4 listenaddress=0.0.0.0 listenport=3000

# add portproxy
netsh interface portproxy add v4tov4 listenport=3000 listenaddress=0.0.0.0 connectport=3000 connectaddress= TOFILLL

```