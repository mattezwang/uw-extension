from data.mysqlconnection import connectToMySQL
import json
query = "SELECT * FROM courses"
data = connectToMySQL('uw_extension_schema').query_db(query)

