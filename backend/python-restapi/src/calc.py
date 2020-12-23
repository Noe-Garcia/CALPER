import consumoApiBanxico as api

#Calcula inflacion pronosticada
def calcInflacionPronosticada():
    return float((api.getInfFinal()/(api.getInfActual())-1)*100)
#Calcula el valor en cetes del ahorro del usuario a 12 meses
def valorEnCetes(ahorros):
    return float(ahorros)*(1+(api.getValorCete()/100))
#Calcula el valor real a 12 meses segun la inflacion pronosticada
def valorReal(ahorros):
    return (ahorros)/(1+(calcInflacionPronosticada()/100))
#Devuelve la fecha de calculo de la infalcion actual
def getFechaInicio():
    return api.getInfActualDate()
#Devuelve la fecha de calculo de la inflacion pronosticada a 12 meses


print(calcInflacionPronosticada())
print(valorEnCetes(500))
print(valorReal(500))
print(getFechaInicio())