from flask import Flask

app = Flask(__name__)

@app.route("/", methods=["GET"])
def root():
    return "welcome to flask server"

app.run(host="0.0.0.0", port=4001, debug=True)
