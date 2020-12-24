#COMANDOS DOCKER
#docker build -t calper . | comando para construir el contenedor
#docker run -it -p 5000:4000 -d calper | comando para correr en el contenedor
#docker container ls // docker stop {3 primeros digitos del id} | comandos para encontrar el contenedor y detenerlo

from flask import Flask, jsonify
# import calc

apiCliente = Flask(__name__)

@apiCliente.route('/calculo', methods=['POST'])
def getDatos(ahorro):
    print(ahorro)
    return jsonify({"ahorro": ahorro, "fechaFin": "01/06/2021", "fechaInicio": "01/06/2020", "inflacionFechaFin": 8.2341, "inflacionFechaInicio": 7.3542, "valorInvirtiendoEnCetes": 490.3245, "valorReal": 460.1234})

if __name__ == '__main__':
    apiCliente.run(host="0.0.0.0", port=4000, debug=True,)