# telegram-broadcast-upgi
message broadcasting web service to interface with Telegram bot API

steps to deploy application
1. navigate to proper folder where the project folder will reside
2. git clone [repository location], the creates a "telegram-broadcast-upgi" folder inside
3. rename the "example.db" to "telegramBroadcast.db"
4. from the commandline or code editor, add a ".env" file to the project root
5. copy the following content to the .env file and edit the information accordingly

ENV=(development / production)                          (without the "(" or ")")
BASE_URL=(http://localhost / http://upgi.ddns.net)      (without the "(" or ")")
PORT=xxxx                                               (edit to fit situation)
SYS_REF=telegramBroadcast
PASS_PHRASE=icnefjkrjfudneldueklsjdu                    (自行決定，任何字串都可以)
VALIDATE=enforced                                       (must say 'enforced' exactly, or the system won't validate jwt)
TIMEZONE=Asia/Taipei
TELEGRAM_ID=xxxxxxxxx                                   (master telegram account)
TELEGRAM_USERNAME=upgiItDepartment                      (master telegram account)
TELEGRAM_NAME=Uni-President Glass IT department         (master telegram account)
TELEGRAM_MOBILE=+xxx xxxxxxxxx                          (master telegram account)
BOT_ID=xxxxxxxxx                                        (default bot to use with the system)
BOT_USERNAME=upgiItBot                                  (default bot to use with the system)
BOT_FIRST_NAME=UPGI IT Bot                              (default bot to use with the system)
BOT_TOKEN=xxxxxxxxx:xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx (default bot to use with the system)
AUTO_AUTHORIZED_SYSTEMS=seedCount,overdueMonitor,rawMaterial,universalForm,erp-data-service
(a list of systems to be automatically authenticated)

remove all the comments and watch out for white-spaces!
