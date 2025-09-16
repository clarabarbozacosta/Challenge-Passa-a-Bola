registros_copa = []
registros_encontros = []



# Função que permite a usuária de escolher qual tipo de inscrição quer fazer
def tipos():
    while True:
        try:
            tipo = input('Você gostaria de se inscrever para a Copa Passa a Bola ou para Encontro Passa a Bola? ')

            # Copa escolhida
            if "copa" in tipo.lower():
                return True   
            
            # Encontro escolhido
            elif "encontro" in tipo.lower():
                return False  
            else:
                raise ValueError('Opção inválida. Digite "Copa" ou "Encontro".')
        except ValueError as e:
            print(e)



# Função que verifica se o número do CPF está correto
def validar_cpf(cpf: str) -> bool:
    
    # Remove caracteres que não sejam dígitos
    cpf = ''.join(filter(str.isdigit, cpf))
    if len(cpf) != 11 or cpf == cpf[0] * 11:
        return False

    # Validação do primeiro dígito verificador
    soma = sum(int(cpf[i]) * (10 - i) for i in range(9))
    digito1 = (soma * 10 % 11) % 10

    # Validação do segundo dígito verificador
    soma = sum(int(cpf[i]) * (11 - i) for i in range(10))
    digito2 = (soma * 10 % 11) % 10

    return digito1 == int(cpf[9]) and digito2 == int(cpf[10])




# Função que cadastra treinadores e treinadoras
def coaches():
    
    # Pega nome do time 
    nome_time = input("Digite o nome do seu time: ")

    # Loop que se certifica que o usuário insira uma resposta válida
    while True:
        try:
            # Input que verifica se é treinador ou treinadora, para uma experiência mais personalizada
            genero = input('O time possui treinador ou treinadora? ')
            
            # Verifica se é treinadora e coleta os dados dela 
            if genero.lower() == 'treinadora':
                t = 'da treinadora'
                nome_t = input(f"Digite o nome completo {t}: ")
                data_t = input(f"Digite a data de nascimento {t} (Ex: xx/xx/xxxx): ")

                # Valida o CPF logo após a entrada
                while True:
                    cpf_t = input(f"Digite o CPF {t} (ex: xxx.xxx.xxx-xx): ")
                    if validar_cpf(cpf_t):
                        break
                    else:
                        print("CPF inválido! Tente novamente.")

                celular_t = input(f"Digite o número de celular {t} (Ex: (xx) xxxxx-xxxx): ")
                email_t = input(f"Digite o email {t}: ")

                # Cria um dicionário para a treinadora
                time = {
                    'nome': nome_time,
                    'treinadora': nome_t,
                    'data de nascimento treinadora': data_t,
                    'cpf da treinadora': cpf_t,
                    'celular da treinadora': celular_t,
                    'e-mail da treinadora': email_t,
                    'jogadoras': []  # lista de jogadoras iniciada
                }

                # Adiciona a treinadora no time
                registros_copa.append(time)
                break  # encerra o loop
            
            
            # Verifica se é treinador e coleta os dados dele
            elif genero.lower() == 'treinador':
                t = 'do treinador'
                nome_t = input(f"Digite o nome completo {t}: ")
                data_t = input(f"Digite a data de nascimento {t} (Ex: xx/xx/xxxx): ")

                # Valida o CPF logo após a entrada
                while True:
                    cpf_t = input(f"Digite o CPF {t} (ex: xxx.xxx.xxx-xx): ")
                    if validar_cpf(cpf_t):
                        break
                    else:
                        print("CPF inválido! Tente novamente.")

                celular_t = input(f"Digite o número de celular {t} (Ex: (xx) xxxxx-xxxx): ")
                email_t = input(f"Digite o email {t}: ")

                # Cria um dicionário para o treinador
                time = {
                    'nome': nome_time,
                    'treinador': nome_t,
                    'data de nascimento do treinador': data_t,
                    'cpf do treinador': cpf_t,
                    'celular do treinador': celular_t,                                     
                    'e-mail do treinador': email_t,
                    'jogadoras': []  # lista de jogadoras iniciada
                }

                # Adiciona o treinador no time
                registros_copa.append(time)
                break  # encerra o loop
                
            # Trata casos de erro
            else:
                raise ValueError('Opção inválida! Digite "treinador" ou "treinadora".')
                
        except ValueError as e:
            print(e)



# Função que pega as informações da capitã do time 
def capita(time):
    nome_c = input("Digite o nome completo da capitã do time: ")
    data_c = input("Digite a data de nascimento da capitã do time (Ex: xx/xx/xxxx): ")

    # Valida o CPF logo após a entrada
    while True:
        cpf_c = input("Digite o CPF da capitã do time (ex: xxx.xxx.xxx-xx): ")
        if validar_cpf(cpf_c):
            break
        else:
            print("CPF inválido! Tente novamente.")

    celular_c = input("Digite o número de celular da capitã do time (Ex: (xx) xxxxx-xxxx): ")
    email_c = input("Digite o email da capitã do time: ")
    
    # Cria dicionário para capitã
    capita_dict = {
        'nome': nome_c,
        'data de nascimento capitã': data_c,
        'cpf da capitã': cpf_c,
        'celular da capitã': celular_c,
        'e-mail da capitã': email_c
    }
    
    # Adiciona ao time
    time['jogadoras'].append(capita_dict)




# Função que coleta as informações das jogadoras
def jogadoras(n):
    
    # Pega o último time adicionado em registros
    time = registros_copa[-1]

    for i in range(n):
        nome_j = input(f"Digite o nome da jogadora {i+1}: ")
        data_j = input(f"Digite a data de nascimento da jogadora {i+1} (Ex: xx/xx/xxxx): ")
        
        # Valida o CPF logo após a entrada
        while True:
            cpf_j = input(f"Digite o CPF da jogadora {i+1} (ex: xxx.xxx.xxx-xx): ")
            if validar_cpf(cpf_j):
                break
            else:
                print("CPF inválido! Tente novamente.")
                
        posicao_j = input(f"Digite a posição em que a jogadora {i+1} joga: ")
        numero_j = int(input(f"Digite o número da camiseta da jogadora {i+1}: "))
        celular_j = input(f"Digite o número de celular da jogadora {i+1} (Ex: (xx) xxxxx-xxxx): ")

        # Cria um dicionário da jogadora
        jogadora = {
            "nome": nome_j,
            "data de nascimento": data_j,
            "cpf": cpf_j,
            "posição": posicao_j,
            "número da camisa": numero_j,
            "celular": celular_j
        }

        # Adiciona ao time
        time["jogadoras"].append(jogadora)
        


# Função que coleta as informações das jogadoras amadoras
def amadoras():
    nome_a = input("Digite o nome completo da jogadora: ")
    data_a = input("Digite a data de nascimento da jogadora (Ex: xx/xx/xxxx): ")

    # Valida o CPF logo após a entrada
    while True:
        cpf_a = input("Digite o CPF da jogadora (ex: xxx.xxx.xxx-xx): ")
        if validar_cpf(cpf_a):
            break
        else:
            print("CPF inválido! Tente novamente.")

    celular_a = input("Digite o número de celular da jogadora (Ex: (xx) xxxxx-xxxx): ")
    email_a = input("Digite o email da jogadora: ")
    
    # Cria um dicionário da jogadora 
    jogadora = {
        "nome": nome_a,
        "data de nascimento": data_a,
        "cpf": cpf_a,
        "celular": celular_a,
        "e-mail": email_a
    }
    
    # Adiciona ao registro
    registros_encontros.append(jogadora)



# Função principal que junta as outras funções
def main():
    print("=== Bem-vinda ao Passa a Bola ===")

    # True = Copa, False = Encontro
    tipo_inscricao = tipos()  

    if tipo_inscricao:  
        # Fluxo para Copa
        print("\n--- Inscrição na Copa Passa a Bola ---")
        coaches()  

        # Último time adicionado
        time = registros_copa[-1]

        # Adiciona capitã
        capita(time)

        # Pergunta quantidade de jogadoras
        while True:
            try:
                n = int(input("Quantas jogadoras (excluindo a capitã) deseja cadastrar? "))
                if n < 0:
                    raise ValueError("O número não pode ser negativo.")
                break
            except ValueError as e:
                print(f"Entrada inválida: {e}")

        # Cadastra as jogadoras
        jogadoras(n)

        # Imprime as informações salvas
        print("\nCadastro finalizado com sucesso!")
        print("Time registrado:", registros_copa[-1])

    else:  
        # Fluxo para Encontro
        print("\n--- Inscrição no Encontro Passa a Bola ---")
        amadoras()
        print("\nCadastro finalizado com sucesso!")
        print("Participante registrada:", registros_encontros[-1])
    




if __name__ == "__main__":
    main()

