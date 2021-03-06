const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async db => {
    //Insert data in table
    saveOrphanage(db,  {
        id: 1,
        lat: "-27.2232517", 
        lng: "-49.6485054",
        name: "Lar dos meninos",
        about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        whatsapp: "81237912",
        images: [
            "https://images.unsplash.com/photo-1590077428593-a55bb07c4665?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

            "https://images.unsplash.com/photo-1597095540293-b184e2b0d044?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
        ].toString(),

        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horário de visitas Das 18h até 8h",
        open_on_weekends: "0"
    })
    //Search data in table
    const selectedOrphanages = await db.all("SELECT * FROM orphanages");
    console.log(selectedOrphanages);
    
    //Search specific element
    const orphanagee = await db.all("SELECT * FROM orphanages WHERE id = '1'");
    console.log(orphanagee);
});