
#!/bin/bash

#!/bin/bash

while true
do

#correctpass ="ec"

#password=$(whiptail --passwordbox "Please enter your secret password" 8 78 --title "Password checker" 3>&1 1>&2 2&3)

#if [ "$password" = "$correctpass" ]; then
#   whiptail --msgbox "Acess granted young man" 10 40
#else
#   whiptail --msgbox "Wrong password yung man, try again bud" 10 40
#  exit
#fi

choice=$(whiptail --menu "Proceed or Exit" 15 40 2 \
1 "Proceed" \
2 "Exit" \
3>&1 1>&2 2>&3)

if [ "$choice" = "2" ]; then
    whiptail --msgbox "Congats, you used mcdos menu. COME AGAIN!" 10 50
    exit
fi

tool=$(whiptail --menu "Choose awk or grep" 15 40 2 \
1 "awk" \
2 "grep" \
3>&1 1>&2 2>&3)

file=$(whiptail --inputbox "Enter fruit.csv or vegetable.csv" 10 40 \
3>&1 1>&2 2>&3)

item=$(whiptail --inputbox "Enter fruit or vegetable to search" 10 40 \
3>&1 1>&2 2>&3)

# If awk selected
if [ "$tool" = "1" ]; then
    result=$(awk -F',' -v word="$item" '$0 ~ word {print $2}' $file)
    whiptail --msgbox "$result" 20 50
fi

# If grep selected
if [ "$tool" = "2" ]; then
    result=$(grep "$item" $file)
    whiptail --msgbox "$result" 20 50
fi

done
