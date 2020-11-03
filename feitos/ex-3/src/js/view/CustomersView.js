import { View } from './View.js';

export class CustomersView extends View {


    getContent(customers) {
        let list = []
        for(let i = 0; i < customers.length; i++) {
            let customer = customers[i]
            list.push(
                `<tr>
                    <td>${customer.name}</td>
                    <td>${customer.surname}</td>
                    <td>${customer.dateOfBirth}</td>
                    <td>${customer.cpf}</td>
                    <td>${customer.road}</td>
                    <td>${customer.neigborhood}</td>
                    <td>${customer.city}</td>
                    <td>${customer.cep}</td>
                    <td>${customer.state}</td>
                    <td>${customer.country}</td>
                    <td><button onclick="app.removeCustomer(${i})">Remover</button></td>
                </tr>`
            )
            
        }


        return `<table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Sobrenome</th>
                            <th>Dt. de nascimento</th>
                            <th>CPF</th>
                            <th>Rua</th>
                            <th>Bairro</th>
                            <th>Cidade</th>
                            <th>CEP</th>
                            <th>Estado</th>
                            <th>Pais</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>${list.join("")}</tbody>        
                </table>`
    } 
    
}