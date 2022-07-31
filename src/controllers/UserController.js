const users = [
    {
      id: 1,
      nome_completo: "Roberto Silva",
      usuario: "roberto",
      email: "robertinho123@email.com",
      idade: 27,
      avatar: "user1.jpeg",
    },
    {
      id: 2,
      nome_completo: "Ana Monteiro",
      usuario: "ana",
      email: "aninha123@email.com",
      idade: 22,
      avatar: "user2.jpeg",
    },
    {
      id: 3,
      nome_completo: "Juliana Rios",
      usuario: "juliana",
      email: "ju123@email.com",
      idade: 18,
      avatar: "user3.jpeg",
    },
    {
      id: 4,
      nome_completo: "João Souza",
      usuario: "joão",
      email: "joaozinho123@email.com",
      idade: 45,
      avatar: "user4.jpeg",
    },
    {
      id: 5,
      nome_completo: "Roberto Aragão",
      usuario: "roberto",
      email: "robertinho123@email.com",
      idade: 70,
      avatar: "user5.jpeg",
    },
    {
      id: 6,
      nome_completo: "Pedro do Santos",
      usuario: "pedro",
      email: "pedrinho123@email.com",
      idade: 20,
      avatar: "user6.jpeg",
    },
    {
      id: 7,
      nome_completo: "Lucas Morais",
      usuario: "lucas",
      email: "luquinhas123@email.com",
      idade: 30,
      avatar: "user7.jpeg",
    },
    {
      id: 8,
      nome_completo: "Helder Santos",
      usuario: "helder",
      email: "helder123@email.com",
      idade: 25,
      avatar: "user8.jpeg",
    },
    {
      id: 9,
      nome_completo: "Marcos Dinis",
      usuario: "Dinis",
      email: "marquinhos123@email.com",
      idade: 40,
      avatar: "user9.jpeg",
    },
  ];

const UserController = {
    registration: (req, res) => {
        return res.render("registration", {title: "Cadastro"});
    },
    login: (req, res) => {
        return res.render("login", {title: "Login",users});
    },
    personal: (req, res) => {
        return res.render("user-data", {title: "Info usuário"});
    },
    index: (req, res) => {
      return res.render("users", { title: "Lista de usuários", users }); },
      create: (req, res) => {
        return res.render("user-create", { title: "Cadastrar usuário" });
    
    } } 
module.exports = UserController;