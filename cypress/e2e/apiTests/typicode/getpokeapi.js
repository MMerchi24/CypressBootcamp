describe('check any questions about "pokeapi"', () => {

    it('check the status of the url', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/pikachu/').should((response) => {
            expect(response.status).to.eq(200);
        });

    });

    //Test comentado: hecho por Javier Flores:

    /* it('check if there are keys string o number', () => {
        //pokeKeys = (['id', 'base_experience', 'height'])
        //const pokemoNameID = 5;
        const pokemonNameOrID = 'pikachu';

        cy.request(`https://pokeapi.co/api/v2/pokemon/${pokemonNameOrID}`).should((response) => {
            expect(response.status).to.eq(200);
            const pokemonInfo = response.body
            expect(pokemonInfo).to.have.property('name', pokemonNameOrID)
            expect(pokemonInfo).to.have.property('name')
            expect(pokemonInfo).to.have.property('abilities')
            expect(pokemonInfo.abilities).to.be.an('array')
            expect(response.body).to.include.all.keys(['id', 'base_experience', 'height']);
        });
     });*/
    it('check if any key has a string or number value with pikachu', () => {
        const namePokemon = 'pikachu';
        const numId = 25;
         

        cy.request('GET', "https://pokeapi.co/api/v2/pokemon/pikachu/").then((response) => {
            const valorPokemon = response.body;
            //Comprobar si algunas keys tienen de tipo valor string o number
            //expect(valorPokemon.id).to.be.an('string'); //Error, no tiene un valor string
            //expect(valorPokemon.id).to.be.an('string' || 'number' ); // el OR  '||' no funciona, solo verifica la primera premisa 
            //expect(valorPokemon.id).to.be.an( 'number'|| 'string' ); // el OR  '||' funciona porque evalua correctamente la primera, que es un number 
            
            expect(valorPokemon.id).to.be.a('number');
            expect(valorPokemon.id).not.to.be.a('string');
             
            expect(valorPokemon).to.include.all.keys(['name', 'id', 'abilities', 'base_experience']);

            expect(valorPokemon).to.have.property('name', namePokemon)
            //expect(valorPokemon).to.have.property('id', numId)
            expect(valorPokemon).to.have.property('abilities');
            expect(valorPokemon.abilities).to.be.an('array');
            


            //Comprobar el valor de los keys id, base_experience and height
            // 2 maneras de hacerlo:
            //expect(valorPokemon.id).to.eq(numId); //Una manera de hacerlo
            expect(valorPokemon).to.have.property('id',numId); //Otra manera de hacerlo
            
            expect(valorPokemon).to.have.property('id', 25);
            expect(valorPokemon.id).to.eq(25);
            
            
            //expect(valorPokemon).to.have.property('base_experience', 112)
            expect(valorPokemon.base_experience).to.eq(112)
            //expect(valorPokemon.height).to.eq(11)
            expect(valorPokemon).to.have.property('height', 4)
        
           //expect (valorPokemon.id).should('have',  25); mal
            //expect(valorPokemon.id).to.be(25); mal -no se hace ni con should, ni have, ni to.be.
            expect(valorPokemon.base_experience).to.eq(112)
            expect(valorPokemon).to.have.property('base_experience', 112)
            //expect(valorPokemon).to.be('height', 4)
        });
    });
    it('check if any key has a string or numer value with pokemon 5', () => {
        const namePokemon = "charmeleon";
        const numId = 5;

        cy.request("https://pokeapi.co/api/v2/pokemon/5").should((response) => {
            //Comprobar si algunas keys tienen de tipo valor string o number
            //expect(response.body.id).to.be.an('string' || 'number') // mismo caso que el anterior test, no funciona
            
            const valorPokemon = response.body;
            expect(valorPokemon.id).to.be.an( 'number')

            expect(valorPokemon).to.have.property('name', namePokemon)
            expect(valorPokemon).to.have.property('id', numId)
            expect(valorPokemon).to.have.property('abilities');
            expect(valorPokemon.abilities).to.be.an('array');

            //Comprobar el valor de los keys id and base_experience
            // 3 formas de hacerlo: con una variable, con el valor definido y con el valor igual definido.
            expect(valorPokemon).to.have.property('id',numId);
            expect(valorPokemon).to.have.property('id', 5);
            expect(valorPokemon.id).to.eq(5);
            //expect(valorPokemon).to.have.property('base_experience', 142)
            expect(valorPokemon.base_experience).to.eq(142)
            expect(valorPokemon).to.have.property('height', 11)
        });
    });
});
