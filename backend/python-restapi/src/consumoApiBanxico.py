#SP30578 INPC - Inflacion Anual
#SP68257 Valor de UDIS en MXN
#SR16773 Inflación general en los proximos 12 meses
#SR14755 Tasa de Interes del Cete

from flask import Flask, jsonify
from users import users
import requests
import json

app = Flask(__name__)

def getInfActual():
    return float(infActual)

def getInfActualDate():
    return infActualDate

def getValorUdis():
    return float(valorUdis)

def getValorUdisDate():
    return valorUdisDate

def getInfFinal():
    return float(infFinal)

def getInfFinalDate():
    return infFinalDate

def getValorCete():
    return float(valorCete)

def getValorCeteDate():
    return valorCeteDate

url = 'https://www.banxico.org.mx/SieAPIRest/service/v1/series/SP30578,SP68257,SR16773,SR14755/datos/oportuno?token=2ac7879679a24f782b0ab50a26563302baaad76fc53c52968a1a113e7e6aae5a'
response = requests.get(url)
    
if response.status_code == 200:
    response_json = json.loads(response.content)
    bmx = response_json['bmx']
    series = bmx['series']

    for inpclist in series:
        if inpclist['idSerie'] == 'SP30578':
            for inpcdata in inpclist['datos']:
                infActual = inpcdata['dato']
                infActualDate = inpcdata['fecha']
                getInfActual()
                getInfActualDate()

    for udislist in series:
        if udislist['idSerie'] == 'SP68257':
            for udisdata in udislist['datos']: 
                valorUdis = udisdata['dato']
                valorUdisDate = udisdata['fecha']
                getValorUdis()
                getValorUdisDate()

    for infglist in series:
        if infglist['idSerie'] == 'SR16773':
            for infgdata in infglist['datos']:
                infFinal = infgdata['dato']
                infFinalDate = infgdata['fecha']
                getInfFinal()
                getInfFinalDate()
        
    for cetelist in series:
        if cetelist['idSerie'] == 'SR14755':
            for cetedata in cetelist['datos']:
                valorCete = cetedata['dato']
                valorCeteDate = cetedata['fecha']
                getValorCete()
                getValorCeteDate()