If you are trying to execute a script on the Terminal using the Zsh shell and you get permission denied then make sure that the script has the execute permissions. You can do that by using the ls command.

cd to the scripts folder to see permissions

```ls -ltrh```

and then run

```chmod +x clear.sh```