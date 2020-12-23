import app


def calcInflacion(infMesActual, infMesFinal):
    return ((infMesFinal/infMesActual)-1)*100


def calcularAlgo():
    variable = app.getINPC()