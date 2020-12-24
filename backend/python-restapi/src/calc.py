import consumoApiBanxico as api
import apiCliente

#Calcula inflacion pronosticada
def calcInflacionPronosticada():
    return float((api.getInfFinal()/(api.getInfActual())-1)*100)

#Calcula el valor en cetes del ahorro del usuario a 12 meses
def valorEnCetes(ahorros):
    return float(ahorros)*(1+(api.getValorCete()/100))
    
#Calcula el valor real a 12 meses segun la inflacion pronosticada
def valorReal(ahorros):
    return (ahorros)/(1+(calcInflacionPronosticada()/100))