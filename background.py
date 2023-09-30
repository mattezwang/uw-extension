import MySQLdb
import ratemyprofessor

from flask import Flask, jsonify, render_template, request

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

app = Flask(__name__)

@app.route('/')
def home():
  return render_template('index.html')


@app.route('/accessData', method="POST")
def getData():
    professor_list = request.args.get('professor_list')
    course = request.args.get('course')

    # access your DB get your results here
    professor_scores = [""]
    for professor in professor_list:
      professor_scores.append(ratemyprofessor.get_professor_by_school_and_name(
      ratemyprofessor.get_school_by_name("University of Wisconsin - Madison"), professor))
    
    with connection:
      with connection.cursor() as cursor:
        cursor.execute("""SELECT MAX(((a_count * 4) + (ab_count * 3.5) + (b_count * 3) + (bc_count * 2.5) + (c_count * 2) 
                       + (d_count * 1) + (f_count * 0))/(a_count + ab_count + b_count + bc_count + c_count + d_count 
                       + f_count)) FROM `grade_distributions` JOIN `course_offerings` ON `grade_distributions`.`
                       course_offering_uuid` = `course_offerings`.`uuid` WHERE course_offerings.name = \'""" + course + "\'")
        m = cursor.fetchone()
    return jsonify(m)
  

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=43935)