import React from 'react';

export default function Footer() {
    return (
        <div className="Footer">
            <div>
                <p>Créer une nouvelle route /profil qui va afficher un Composant Profile</p>
                <p>Créer le composant Profile qui va afficher des informations de votre choix</p>
                <p>
                    Sur le composant Profile, créer un lien qui permet de revenir à la page précédente
                </p>
            </div>
            <div>
                <p>Créer un route qui redirige vers un paramètre, et qui affiche un composant PageParametre</p>
                <p>Dans le composant PageParamètre, afficher la valeur du paramètre reçu en URL avec useParams</p>
                <p>Utilisation des paramètres ici : <a href="https://reactrouter.com/web/example/url-params">https://reactrouter.com/web/example/url-params</a></p>
            </div>
            <div>
                <p>Dans le header du composant App, remplacer les composants Link par des
                    <a href="https://reactrouter.com/web/guides/primary-components/navigation-or-route-changers">
                        Navigation
                    </a>
                </p>
                <p>
                    Modifier votre code de manière à ce que le lien du header courant s'affiche en vert.
                </p>
            </div>
        </div>
    );
}
