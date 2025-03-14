# 🍃🍀
from flask import Flask, render_template, request, jsonify
import json

app = Flask(__name__)
DATA_FILE = "data\\data.json"

# Load data from JSON file
def load_data():
    try:
        with open(DATA_FILE, "r") as file:
            return json.load(file)
    except (FileNotFoundError, json.JSONDecodeError):
        return {"text": "Show Data"}

# Save data to JSON file
def save_data(data):
    with open(DATA_FILE, "w") as file:
        json.dump(data, file)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/add", methods=["POST"])
def add_data():
    data = request.json
    save_data(data)
    return jsonify(data)

@app.route("/get")
def get_data():
    return jsonify(load_data())

if __name__ == "__main__":
    app.run(debug=True)

# written by Pratham 🍂🍁