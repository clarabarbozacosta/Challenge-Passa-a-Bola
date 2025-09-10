import oracledb

# ----- CONEXÃO COM ORACLE -----
username = "ADMIN"
password = "PassaBola2025"
wallet_path = "/Users/clarabarbozacosta/Sprints-Passa-a-Bola"
dsn = "(description= (retry_count=20)(retry_delay=3)(address=(protocol=tcps)(port=1522)(host=adb.sa-saopaulo-1.oraclecloud.com))(connect_data=(service_name=gbf040a934e5b95_passabola_tp.adb.oraclecloud.com))(security=(ssl_server_dn_match=yes)))"

oracledb.init_oracle_client(config_dir=wallet_path)

try:
    conn = oracledb.connect(user=username, password=password, dsn=dsn)
    print("Conexão Oracle bem-sucedida!")
except Exception as e:
    print("Erro ao conectar no Oracle:", e)
    conn = None

# ----- REGISTROS -----
registros = []

def capitã():
    nome_time = input("Digite o nome do seu time: ")
    nome_capita = input("Digite o nome completo da capitã:")
    data_capita = input("Digite a data de nascimento da capitã (Ex:xx/xx/xxxx): ")
    cpf_capitã = input("Digite o CPF da capitã (ex:xxx.xxx.xxx-xx): ")
    posiçao_capita = input("Digite a posição em que a capitã joga: ")
    numero_capita = int(input("Digite o número da camiseta da capitã: "))
    celular_capita = input("Digite o número de celular da capitã (Ex: (xx) xxxxx-xxxx): ")
    tamanho_time = int(input("Insira a quantidade de jogadoras, incluindo reservas se houver: "))
    
    time = {
        'nome': nome_time,
        'capitã': nome_capita,
        'data de nascimento capitã': data_capita,
        'cpf da capitã': cpf_capitã,
        'posição da capitã': posiçao_capita,
        'número da camisa': numero_capita,
        'celular da capitã': celular_capita,
        'quantidade de jogadoras': tamanho_time
    }
    
    registros.append(time)
    print(registros)
    
    
    
def treinadora():
    nome_time = input("Digite o nome do seu time: ")
    nome_treinadora = input("Digite o nome completo da treinadora: ")
    data_treinadora = input("Digite a data de nascimento da treinadora (Ex:xx/xx/xxxx): ")
    cpf_treinadora = input("Digite o CPF da treinadora (ex:xxx.xxx.xxx-xx): ")
    celular_treinadora = input("Digite o número de celular da treinadora (Ex: (xx) xxxxx-xxxx): ")
    tamanho_time = int(input("Insira a quantidade de jogadoras, incluindo reservas se houver: "))
    
    time = {
        'nome': nome_time,
        'treinadora': nome_treinadora,
        'data de nascimento treinadora': data_treinadora,
        'cpf da treinadora': cpf_treinadora,
        'celular da treinadora': celular_treinadora,
        'quantidade de jogadoras': tamanho_time
    }
    
    registros.append(time)
    print(registros)
    
    
    
def treinador():
    nome_time = input("Digite o nome do seu time: ")
    nome_treinador = input("Digite o nome completo do treinador: ")
    data_treinador = input("Digite a data de nascimento do treinador (Ex:xx/xx/xxxx): ")
    cpf_treinador = input("Digite o CPF do treinador (ex:xxx.xxx.xxx-xx): ")
    celular_treinador = input("Digite o número de celular do treinador (Ex: (xx) xxxxx-xxxx): ")
    tamanho_time = int(input("Insira a quantidade de jogadoras, incluindo reservas se houver: "))
    
    time = {
        'nome': nome_time,
        'treinador': nome_treinador,
        'data de nascimento treinador': data_treinador,
        'cpf do treinador': cpf_treinador,
        'celular do treinador': celular_treinador,
        'quantidade de jogadoras': tamanho_time
    }
    
    registros.append(time)
    print(registros)
    
    
    

    
def jogadoras(n):
    # pega o último time adicionado em registros
    time = registros[-1]
    time["jogadoras"] = []  # cria categoria "jogadoras" dentro do dicionário

    for i in range(n):
        nome_jogadora = input(f"Digite o nome da jogadora {i+1}: ")
        data_jogadora = input(f"Digite a data de nascimento da jogadora {i+1} (Ex:xx/xx/xxxx): ")
        cpf_jogadora = input(f"Digite o CPF da jogadora {i+1} (Ex:xxx.xxx.xxx-xx): ")
        posicao_jogadora = input(f"Digite a posição em que a jogadora {i+1} joga: ")
        numero_jogadora = int(input(f"Digite o número da camiseta da jogadora {i+1}: "))
        celular_jogadora = input(f"Digite o número de celular da jogadora {i+1} (Ex: (xx) xxxxx-xxxx): ")

        # cria um dicionário da jogadora
        jogadora = {
            "nome": nome_jogadora,
            "data de nascimento": data_jogadora,
            "cpf": cpf_jogadora,
            "posição": posicao_jogadora,
            "número da camisa": numero_jogadora,
            "celular": celular_jogadora
        }

        # adiciona ao time
        time["jogadoras"].append(jogadora)

    print("\nTime atualizado com jogadoras:")
    print(time)
    
    
# ----- FUNÇÕES DE CAPTAÇÃO DE DADOS -----
# (mantém capitã, treinadora, treinador e jogadoras como você já escreveu)
# apenas adicionaremos a parte de inserção no banco no final da coleta

def inserir_no_banco(time):
    if not conn:
        print("Banco não conectado. Não foi possível inserir.")
        return

    try:
        cur = conn.cursor()
        
        # Inserir na tabela TIME
        cur.execute(
            "INSERT INTO time (nome, quantidade_jogadoras) VALUES (:nome, :qtd) RETURNING id_time INTO :id_time",
            {"nome": time["nome"], "qtd": time["quantidade de jogadoras"], "id_time": cur.var(int)}
        )
        id_time = cur.getvalue("id_time")[0]  # pega o ID gerado
        
        # Inserir a capitã, se existir
        if "capitã" in time:
            cur.execute(
                """INSERT INTO capita (id_time, nome, data_nascimento, cpf, posicao, numero_camisa, celular)
                   VALUES (:id_time, :nome, TO_DATE(:data, 'DD/MM/YYYY'), :cpf, :posicao, :numero, :celular)""",
                {
                    "id_time": id_time,
                    "nome": time["capitã"],
                    "data": time["data de nascimento capitã"],
                    "cpf": time["cpf da capitã"],
                    "posicao": time["posição da capitã"],
                    "numero": time["número da camisa"],
                    "celular": time["celular da capitã"]
                }
            )
        
        # Inserir jogadoras
        for j in time.get("jogadoras", []):
            cur.execute(
                """INSERT INTO jogadora (id_time, nome, data_nascimento, cpf, posicao, numero_camisa, celular)
                   VALUES (:id_time, :nome, TO_DATE(:data, 'DD/MM/YYYY'), :cpf, :posicao, :numero, :celular)""",
                {
                    "id_time": id_time,
                    "nome": j["nome"],
                    "data": j["data de nascimento"],
                    "cpf": j["cpf"],
                    "posicao": j["posição"],
                    "numero": j["número da camisa"],
                    "celular": j["celular"]
                }
            )
        
        conn.commit()
        print(f"Time '{time['nome']}' inserido com sucesso no banco!")
    
    except Exception as e:
        conn.rollback()
        print("Erro ao inserir no banco:", e)

# ----- FUNÇÃO PRINCIPAL -----
def main():
    while True:
        try:
            responsavel = input("Digite qual função te representa melhor (capitã, treinadora ou treinador): ")
    
            if responsavel.lower() == 'capitã':
                capitã()
            elif responsavel.lower() == 'treinadora':
                treinadora()
            elif responsavel.lower() == 'treinador':
                treinador()
            else:
                raise ValueError("Função inválida")  
    
            break  
        except ValueError as e:
            print(e)
            
    n = registros[0]["quantidade de jogadoras"]
    jogadoras(n)

    # Inserir no banco
    inserir_no_banco(registros[-1])

if __name__ == "__main__":
    main()

