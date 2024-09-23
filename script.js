document.addEventListener('DOMContentLoaded', () => {
    const contacts = [
        {
            name: 'Иван Иванов',
            email: 'ivan11@example.com',
            phone: '+7(912)-456-78-90',
            image: 'https://i.pinimg.com/736x/97/64/4a/97644a289b5726a7386c4b8c7c30e299.jpg'
        },
        {
            name: 'Вероника Пирожкова',
            email: 'veronica22@example.com',
            phone: '+7(987)-884-24-11',
            image: 'https://i.pinimg.com/736x/e1/b6/30/e1b630a743c8ecfca877961ed9cda5fb.jpg'
        },
        {
            name: 'Кирилл Никитич',
            email: 'kirill33@example.com',
            phone: '+7(904)-551-11-56',
            image: 'https://i.pinimg.com/736x/6e/8f/f6/6e8ff6a3e49ea2fed6d088278d9853d9.jpg'
        },
        {
            name: 'Мария Антоновна',
            email: 'maria99@example.com',
            phone: '+7(922)-222-22-22',
            image: 'https://i.pinimg.com/564x/36/c4/53/36c4536c2ec2f74a50a31aa5caab871e.jpg'
        },
        
    ];
    
    function createContactCard(contact){
        const template = document.getElementById('contact-card-template');
        const clone = template.content.cloneNode(true);
        clone.querySelector('img').src = contact.image;
        clone.querySelector('h2').textContent = contact.name;
        clone.querySelector('a').textContent = contact.email;
        clone.querySelector('a').href = `mailto:${contact.email}`;
        clone.querySelector('.phone').textContent = contact.phone;
        document.body.appendChild(clone);
    }
    contacts.forEach(createContactCard);
});
