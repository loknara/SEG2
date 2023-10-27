from flask import Flask, request, jsonify
from flask_cors import CORS
from newsapi import NewsApiClient


app = Flask(__name__)
CORS(app)
newsapi = NewsApiClient(api_key='1cfd6989b86346a4a9d17c2bf73aed96')


@app.route('/news', methods=['GET'])
def getNews():
    top_headlines = newsapi.get_top_headlines(q='finance',
                                              category='business',
                                              language='en',
                                              country='us')
    print(top_headlines)
    return jsonify({'topheadlines': top_headlines})


if __name__ == "__main__":
    app.run()
