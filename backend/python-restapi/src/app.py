#SP30578 INPC - Inflacion Anual
#SP68257 Valor de UDIS en MXN
#SR16773 Inflación general en los proximos 12 meses
#SR14755 Tasa de Interes del Cete

from flask import Flask, jsonify
from users import users
from calc import *
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

    #Aqui consumimos el API de BANXICO
    url = 'https://www.banxico.org.mx/SieAPIRest/service/v1/series/SP30578,SP68257,SR16773,SR14755/datos/oportuno?token=2ac7879679a24f782b0ab50a26563302baaad76fc53c52968a1a113e7e6aae5a'
    response = requests.get(url)
    
    if response.status_code == 200: #Funciones para algoritmos de consulta
        response_json = json.loads(response.content) #Consulta JSON con series de BANXICO
        bmx = response_json['bmx']
        series = bmx['series']

        for inpclist in series:
            if inpclist['idSerie'] == 'SP30578':
                for inpcdata in inpclist['datos']:
                    inpc = inpcdata['dato'] #infMesActual
                    inpcdate = inpcdata['fecha'] #infActualDate
                    print(inpc , inpcdate)

        for udislist in series:
            if udislist['idSerie'] == 'SP68257':
                for udisdata in udislist['datos']: 
                    udis = udisdata['dato'] #valorUdis
                    udisdate = udisdata['fecha'] #valorUdisDate
                    print(udis , udisdate)

        for infglist in series:
            if infglist['idSerie'] == 'SR16773':
                for infgdata in infglist['datos']:
                    infg = infgdata['dato'] #infFinal
                    infgdate = infgdata['fecha'] #infFinalDate
                    print(infg , infgdate)
        
        for cetelist in series:
            if cetelist['idSerie'] == 'SR14755':
                for cetedata in cetelist['datos']:
                    cete = cetedata['dato'] #valorCete
                    cetedate = cetedata['fecha'] #valorCeteDate
                    print(cete , cetedate)

def getInfActual():
def 