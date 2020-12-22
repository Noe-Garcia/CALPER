#SP30577 INPC - Inflacion Mensual
#SP68257 Valor de UDIS en MXN

from flask import Flask, jsonify
from users import users
import requests
import json

app = Flask(__name__)

# @app.route('/', methods=['GET'])
# def ping():
#     return jsonify({"response": "hello world"})

# @app.route('/users')
# def userHandler():
#     return jsonify({"users": users})

if __name__ == '__main__':
    #app.run(host="0.0.0.0", port=8080, debug=True)
    url = 'https://www.banxico.org.mx/SieAPIRest/service/v1/series/SP30577,SP68257/datos/oportuno?token=2ac7879679a24f782b0ab50a26563302baaad76fc53c52968a1a113e7e6aae5a'
    response = requests.get(url)
    
    if response.status_code == 200:
        response_json = response.json()
        bmx = response_json['bmx']
        series = bmx['series']
        serieinf = series[0]
        datos = serieinf['datos']
        indice = datos[-1]
        dato = indice['dato']
        print(dato) #Falta encontrar algoritmo de extraccion exacta del dato
        
        # response_json = json.loads(response.text)
        # dato = response_json['']
        # print(dato)