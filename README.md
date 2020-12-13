# projet

Steps to reproduce:

- npx express-generator --view ejs --git
- update all dependencies in package.json
- add nodemon
- add ESLint and Prettier dependencies and configuration
- create Chrome and nodemon launch configurations

## Structure projet

* `docs ` : documentation,analyse du projet
* `bin/www ` : script de demarrage du projet
*  ` public` : ressource statique (HTML,CSS,Javascript) qui seront mises a disposition par le serveur http
*  ` routes` : route (methode + URL) sur lequel le serveur HTTP va repondre
 *  `views ` : templates permettant la génération de contenue dynamique par le serveur HTTP
  *  `package.json` : raccourcis de démarrage, liste des dépendances du projet

le reste des fichiers sont des fichiers de configuration pour faciliter l'edition
