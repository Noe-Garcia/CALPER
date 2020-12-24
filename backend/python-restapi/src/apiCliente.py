#COMANDOS DOCKER
#docker build -t calper . | comando para construir el contenedor
#docker run -it -p 5000:4000 -d calper | comando para correr en el contenedor
#docker container ls // docker stop {3 primeros digitos del id} | comandos para encontrar el contenedor y detenerlo

from flask import Flask, jsonify
import requests
import calc

apiCliente = Flask(__name__)

def getMonto():
    return ahorros
    
@apiCliente.route('/calculo', methods=['GET'])
def getDatos():
    return jsonify({"ahorros": ahorros, "inflacionPronosticada": calc.calcInflacionPronosticada(), "valorInvirtiendoEnCetes": calc.valorEnCetes(ahorros), "valorReal": calc.valorReal(ahorros)})

if __name__ == '__main__':
    ahorros = 100000 #Dato de prueba
    apiCliente.run(host="0.0.0.0", port=4000, debug=True,)
