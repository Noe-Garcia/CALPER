from flask import Flask, jsonify
# import calc

apiCliente = Flask(__name__)

@apiCliente.route('/calculo', methods=['GET'])
def getDatos():
    return jsonify({"ahorro": 500, "fechaFin": "01/06/2021", "fechaInicio": "01/06/2020", "inflacionFechaFin": 8.2341, "inflacionFechaInicio": 7.3542, "valorInvirtiendoEnCetes": 490.3245, "valorReal": 460.1234})

if __name__ == '__main__':
    apiCliente.run(host="0.0.0.0", port=4000, debug=True,)