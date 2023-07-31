import MySQLdb

connection = MySQLdb.connect(
    host="gateway01.us-west-2.prod.aws.tidbcloud.com",
    port=4000,
    user="42yppRwczsvpiU9.root",
    password="JbuQyGMJOzzm1VLj",
    database="ExtensionDatabase",
    ssl_mode="VERIFY_IDENTITY",
    ssl={
      "ca": "/etc/ssl/cert.pem"
      }
    )

with connection:
  with connection.cursor() as cursor:
    cursor.execute("SELECT DATABASE();")
    m = cursor.fetchone()
    print(m[0])
    