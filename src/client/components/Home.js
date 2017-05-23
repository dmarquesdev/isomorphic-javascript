import React, { Component, PropTypes } from 'react';

import { FlatIcon } from './common';
import { SearchBar } from '../containers';

class Home extends Component {
  onSearch() {
    this.context.router.push('/mapa');
  }

  render() {
    return (
      <div className="home-container">
        <div className="jumbotron">
          <div className="container">
            <FlatIcon name="sao-paulo" width={200} height={200} />
            <div>
              <h1>São Paulo</h1>
              <h1>Criminal Records</h1>
            </div>
            <SearchBar
              onSearch={this.onSearch.bind(this)}
            />
          </div>
        </div>

        <div className="container description">
          <div className="row">
            <div className="col-xs-12 col-md-2 center-content icon">
              <FlatIcon name="police" width={120} height={120} />
            </div>

            <div className="col-xs-12 col-md-10">
              <p>
                Esta aplicação tem o intuito de fornecer uma pesquisa em uma base de dados 
                com dados relativos a Boletins de Ocorrência registrados entre 2013 e 2015 
                no estado de São Paulo. Para maiores informações sobre os dados acesse o 
                artigo acadêmico relativo a ele em 
                <a href="https://figshare.com/articles/A_Platform_of_Police_Reports/3856074/5">
                   A Platform of Police Reports - ICWI 2016
                 </a>. Todas as informações e tecnologias aqui utilizadas estão disponíveis
                 em domínio público. Para entrar em contato com o autor desta aplicação, 
                 acesse os links disponíveis no rodapé desta página.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Home.contextTypes = {
  router: PropTypes.object.isRequired
};

export default Home;
