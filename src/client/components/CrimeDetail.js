import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import {
  FlatIcon,
  Icon,
  Dialog,
  Card
} from './common';

import {
  GoogleMap,
  Marker
} from './map';

import {
  Categories,
  CategoryIcon
} from '../constants';

class CrimeDetail extends Component {
  componentDidUpdate() {
    responsiveTabs();
  }

  renderButtons() {
    return this.props.layout === 'dialog' && (
      <Card className="crime-detail-buttons">
        <Link to="/report" className="btn btn-success">
          <Icon name="print" /> Relatório
        </Link>
      </Card>
    );
  }

  render() {
    const { crime, layout } = this.props;

    if (!crime) {
      return false;
    }

    const marker = [];
    const lat = parseFloat(crime.lat);
    const lon = parseFloat(crime.lon);
    if (!isNaN(lat) && !isNaN(lon)) {
      marker.push(
        <Marker
          id={crime.idBO}
          key={crime.idBO}
          lat={lat}
          lng={lon}
          center={[lat, lon]}
          onClick={() => {}}
        />
      );
    }

    const categoria = crime.categoria.toLowerCase();

    const hiddenClass = (layout === 'dialog') ?
      'hidden-sm-down' : 'hidden-xl-down';

    return (
      <div className={`crime-detail layout-${layout}`}>
        <Card className="crime-detail-resume">
          <FlatIcon name={CategoryIcon[categoria]} width={100} height={100} />
          <div className="resume">
            <h5>{`#${crime.idBO}`}</h5>
            <h5>{crime.partesEnvolvidas[0].nome}</h5>
            <h5>{Categories[categoria]}</h5>
          </div>
        </Card>

        <Card className="crime-detail-map">
          <div className="header">
            <h5><Icon name="map-marker" /> Local</h5>
          </div>
          <div className="info">
            <h6>{crime.local}</h6>
            <h6>{crime.tipoLocal}</h6>
          </div>
          <GoogleMap markers={marker} zoom={8} />
        </Card>

        <Card className="crime-detail-tabs">
          <ul className={`nav nav-tabs ${hiddenClass}`} role="tablist">
            <li className="nav-item">
              <a
                className="nav-link active"
                data-toggle="tab"
                href="#infos"
                role="tab"
              >
                <Icon name="info" /> Informações
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-toggle="tab"
                href="#partes-envolvidas"
                role="tab"
              >
                <Icon name="user" /> Partes Envolvidas
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-toggle="tab"
                href="#naturezas"
                role="tab"
              >
                <Icon name="list" /> Naturezas
              </a>
            </li>
          </ul>

          <div id="crime-detail-infos" className="tab-content big">
            <div
              className="tab-pane active"
              id="infos"
              role="tabpanel"
            >
              <div className="container-fluid">
                <div className="row">
                  <div className="col-xs-12 col-md-4">
                    <span>Número BO: {crime.numero}</span>
                  </div>
                  <div className="col-xs-12 col-md-4">
                    <span>Tipo: {crime.tipoBoletim}</span>
                  </div>
                  <div className="col-xs-12 col-md-4">
                    <span>Flagrante: {crime.flagrante}</span>
                  </div>
                </div>

                <div className="row">
                  <div className="col-xs-12 col-md-6">
                    <span>
                      Delegacia:
                      {` ${crime.idDelegacia} - ${crime.dependencia}`}
                    </span>
                  </div>
                  <div className="col-xs-12 col-md-6">
                    <span>
                      Categoria: {Categories[crime.categoria.toLowerCase()]}
                    </span>
                  </div>
                </div>

                <div className="row">
                  <div className="col-xs-12 col-md-6">
                    <span>
                      Data da Ocorrência: {crime.dataOcorrencia}
                    </span>
                  </div>
                  <div className="col-xs-12 col-md-6">
                    <span>
                      Turno da Ocorrência: {crime.turnoOcorrencia}
                    </span>
                  </div>
                </div>

                <div className="row">
                  <div className="col-xs-12 col-md-6">
                    <span>
                      Data da Comunicação: {crime.dataComunicacao}
                    </span>
                  </div>
                  <div className="col-xs-12 col-md-6">
                    <span>
                      Hora da Comunicação: {crime.horaComunicacao}
                    </span>
                  </div>
                </div>

                <div className="row">
                  <div className="col-xs-12 col-md-6">
                    <span>
                      Data de Elaboração: {crime.dataElaboracao}
                    </span>
                  </div>
                  <div className="col-xs-12 col-md-6">
                    <span>
                      Hora de Elaboração: {crime.horaElaboracao}
                    </span>
                  </div>
                </div>

                <div className="row">
                  <div className="col-xs-12 col-md-6">
                    <span>
                      Exames Requisitados: {crime.examesRequisitados}
                    </span>
                  </div>
                  <div className="col-xs-12 col-md-6">
                    <span>
                      Solução: {crime.solucao}
                    </span>
                  </div>
                </div>

              </div>
            </div>

            <div
              className="tab-pane"
              id="partes-envolvidas"
              role="tabpanel"
            >
              {renderPartesEnvolvidas(crime.partesEnvolvidas)}
            </div>

            <div
              className="tab-pane"
              id="naturezas"
              role="tabpanel"
            >
              <div className="container-fluid">
                {renderNaturezas(crime.naturezas)}
              </div>
            </div>
          </div>
        </Card>
        {this.renderButtons()}
      </div>
    );
  }
}

const renderNaturezas = (naturezas) => {
  return naturezas.map((natureza, i) => {
    return (
      <div className="row" key={i}>
        <div className="col-xs-12 col-md-6">
          <span>Espécie: {natureza.especie}</span>
        </div>
        <div className="col-xs-12 col-md-6">
          <span>Descrição: {natureza.descricao}</span>
        </div>
      </div>
    );
  });
}

const renderPartesEnvolvidas = (partes) => {
  return partes.map((parte, i) => {
    return (
      <div key={parte.rg} className="container-fluid">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <span>Nome: {parte.nome}</span>
          </div>
          <div className="col-xs-12 col-md-6">
            <span>RG: {parte.rg}</span>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-12 col-md-6">
            <span>Tipo de Envolvimento: {parte.tipoEnvolvimento}</span>
          </div>
          <div className="col-xs-12 col-md-6">
            <span>Naturalidade: {parte.naturalidade}</span>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-12 col-md-6">
            <span>Nacionalidade: {parte.nacionalidade}</span>
          </div>
          <div className="col-xs-12 col-md-6">
            <span>Sexo: {parte.sexo}</span>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-12 col-md-6">
            <span>Data de Nascimento: {parte.dataNascimento}</span>
          </div>
          <div className="col-xs-12 col-md-6">
            <span>Idade: {parte.idade}</span>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-12 col-md-6">
            <span>Estado Civil: {parte.estadoCivil}</span>
          </div>
          <div className="col-xs-12 col-md-6">
            <span>Instrução: {parte.instrucao}</span>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-12 col-md-6">
            <span>Profissão: {parte.profissao}</span>
          </div>
          <div className="col-xs-12 col-md-6">
            <span>Cutis: {parte.cutis}</span>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-12 col-md-6">
            <span>Naturezas Envolvidas: {parte.naturezasEnvolvidas}</span>
          </div>
        </div>
      </div>
    );
  });
}

CrimeDetail.propTypes = {
  crime: PropTypes.object,
  layout: PropTypes.string
};

CrimeDetail.defaultProps = {
  layout: 'dialog'
};

export default CrimeDetail;
