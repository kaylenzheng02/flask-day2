from flask import Flask, render_template

app = Flask(__name__)
dogs = [
    {"name": "Milo", "description": "Enjoys long walks and short naps."},
    {"name": "Luna", "description": "Professional tennis-ball collector."},
]


@app.route("/")
def index():
    return render_template("index.html", dogs=dogs)


@app.route("/about")
def about():
    return render_template("about.html")

@app.route("/contact")
def contact():
    return render_template("contact.html")

if __name__ == "__main__":
    app.run(debug=True)

