import React, { Component, PropTypes } from 'react';

import SearchBar from './SearchBar';
import FlatIcon from './FlatIcon';

class Home extends Component {
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
              onSearch={() => { this.context.router.push('/mapa'); }}
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
                Duis lobortis, risus eget blandit ultrices, dui dui pretium
                velit, in aliquam velit orci a felis. Duis maximus, velit ut
                efficitur fringilla, nibh purus malesuada eros, sed malesuada
                velit leo sit amet dolor. Morbi maximus nec tortor sed sagittis.
                Aliquam quis laoreet arcu. Proin dictum metus neque, sed
                suscipit purus luctus non. Cras massa leo, rutrum sed egestas
                et, facilisis eget justo. Vestibulum efficitur nulla nec felis
                blandit fringilla.
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
