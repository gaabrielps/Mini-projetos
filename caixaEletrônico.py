
def main():
    conta()


def conta():
    global valor 
    global somaDaCompra  
    global total_Itens 
    valor = 0
    somaDaCompra = 0 
    total_Itens = 0
    print('Bem-vindo ao caixa eletrônico!')
    print()
    print('para finalizar a compra digite -1')
    print()
    while valor >= 0:
        valor = float(input('Digite o valor do produto: '))
        somaDaCompra = somaDaCompra + valor
        total_Itens = total_Itens + 1
         
    print('Total: ', (somaDaCompra + 1))
    print('Quantidade de itens: ', (total_Itens - 1) )
    print()
    print()
    print('Deseja adicionar mais algum item? ')
    print('1 - SIM')
    print ('2 - NÃO')
    numero = int(input('digite: '))
    if numero == 2:
                 print()
                 print('FORMAS DE PAGAMENTO')
                 print()
                 return FormaDePagamento ()
                 
                 
    else:
         return Adicionar()
        
        

def Adicionar():
    global total_Itens
    global somaDaCompra
    global valor
   
    print()
    total_Itens = total_Itens - 1
    somaDaCompra = somaDaCompra + 1
    valor = 0
    while valor >= 0:
        valor = float(input('Digite o valor do produto: '))
        somaDaCompra = somaDaCompra + valor
        total_Itens = total_Itens + 1
        
    print('Total: ', (somaDaCompra + 1 ))
    print('Quantidade de itens: ', (total_Itens - 1) )
    print()
    FormaDePagamento()


def credito():
    print()
    print('Parcelamos em até 10x sem juros!!!')
    print()
    parcela = int(input('Digite em até quantas vezes pretende parcelar: '))
    print()
    parcelado = somaDaCompra / parcela
    print(somaDaCompra, 'parcelado em', parcela, 'vezes')
    print(parcela,'vezes de' ,parcelado)
    senha = int(input('Digite a senha: '))
    print()
    print('PAGAMENTO REALIZADO!!!!')
    print()
    print(':)')
    print()
    print('OBRIGADO PELA PREFERÊNCIA')
    print('VOLTE SEMPRE!!!')
     
                  


def FormaDePagamento():
    print('Selecione a forma de pagamento: ')
    print()
    print('1 - dinheiro')
    print('2 - débito')
    print('3 - crédito')
    print()
    print()
    n = int(input('Qual forma de pagamento: '))

    if n == 1:
        print('pague em dinheiro')
        print('PAGAMENTO REALIZADO!!!!')
        print()
        print(':)')
        print()
        print('OBRIGADO PELA PREFERÊNCIA')
        print('VOLTE SEMPRE!!!')

    elif n == 2:
        senha = int(input('digite a senha: '))
        print('PAGAMENTO REALIZADO!!!!')
        print()
        print(':)')
        print()
        print('OBRIGADO PELA PREFERÊNCIA')
        print('VOLTE SEMPRE!!!')
        
    else:
        return credito()


    
        
                 
                
                        
    

    
