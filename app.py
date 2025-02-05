from flask import Flask, render_template, send_file

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/videomain.mp4")
def get_video():
    return send_file("videomain.mp4", mimetype="video/mp4")

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
