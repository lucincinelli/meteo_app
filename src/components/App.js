import React from 'react';
import '../media/css/App.css';

function App() {
  return (
    <div className="App">

      <div class="container">

        <header>
          <form action="" method="">
            <article>
              <input type="text" name="city" placeholder="Entrez un nom de ville..."/>
            </article>
            <aside>
              <input type="submit" name="go" value="GO"/>
            </aside>
          </form>
        </header>

        <main>
          <article>
            <h1>Paris, fr</h1>
          </article>
          <aside>
            <div>
              <h2>22°C</h2>
            </div>
            <aside>
              <article class="inf_compl_top">
                <p>10/06/2020</p>
                <p>Légère pluie</p>
              </article>
              <article class="inf_compl_bot">
                <p>Vent: 3.6 mph</p>
                <p>Humidité: 64%</p>
              </article>
            </aside>
          </aside>
        </main>

        <footer>
          <div>
            <table>
              <tr>
                <th>TUE</th>
                <th>WED</th>
                <th>THU</th>
                <th>FRI</th>
                <th>SAT</th>
              </tr>

              <tr>
                <td class="max">21</td>
                <td class="max">21</td>
                <td class="max">22</td>
                <td class="max">22</td>
                <td class="max">24</td>
              </tr>

              <tr>
              <td class="min">17</td>
              <td class="min">16</td>
              <td class="min">14</td>
              <td class="min">15</td>
              <td class="min">16</td>
              </tr>
            </table>
          </div>
        </footer>

      </div>

    </div>
  );
}

export default App;
