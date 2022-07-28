<?php
// This file is part of Moodle - https://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

/**
 * Strings for component 'qtype_vplquestion', language 'fr'
 * @package    qtype_vplquestion
 * @copyright  Astor Bizard, 2019
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

$string['pluginname'] = 'Question VPL';
$string['pluginname_help'] = 'Les Questions VPL permettent aux étudiants d\'effectuer de simples exercices de programmation.<br>
Elles fonctionnent à l\'aide d\'un VPL, mais sont plus simples du point de vue de l\'étudiant.';
$string['pluginnameadding'] = 'Ajout d\'une Question VPL';
$string['pluginnameediting'] = 'Edition d\'une Question VPL';
$string['pluginnamesummary'] = 'Les Questions VPL permettent aux étudiants d\'effectuer de simples exercices de programmation.<br>
Elles fonctionnent à l\'aide d\'un VPL, mais sont plus simples du point de vue de l\'étudiant.';
$string['informationtext'] = 'Question VPL';

$string['allornothing'] = 'Tout ou rien';
$string['answertemplate'] = 'Squelette de réponse';
$string['answertemplate_help'] = 'écrivez ici le code qui sera pré-rempli dans la zone de réponse de l\'étudiant.';
$string['cannotimportquestionvplnotfound'] = 'Attention : l\'id du module VPL de la Question VPL "{$a}" est invalide.';
$string['cannotimportquestionvplunreachable'] = 'Attention : le VPL spécifié dans la Question VPL "{$a}" n\'est pas dans ce cours.';
$string['choose'] = 'Choisissez...';
$string['correction'] = 'Correction';
$string['evaluationdetails'] = 'Détails de l\'évaluation :';
$string['execfiles'] = 'Fichiers d\'exécution';
$string['execfiles_help'] = 'Vous pouvez modifier ici les fichiers d\'exécution. Ils sont transmis uniquement lors de l\'évaluation (et pré-évaluation si les fichiers sont les mêmes), et non lors de l\'exécution (sauf pour les fichiers spécifiés comme étant "à conserver durant l\'exécution" dans le VPL).<br>
Pour ajouter des fichiers, créez-les dans le VPL comme fichiers d\'exécution.<br>
Si vous souhaitez ne pas utiliser un fichier, écrivez "UNUSED" sur la première ligne et il sera omis.';
$string['execfilesevalsettings'] = 'Fichiers d\'exécution et paramètres d\'évaluation';
$string['gradingmethod'] = 'Notation';
$string['gradingmethod_help'] = 'Détermine la méthode de notation de cette question.
<ul><li>Si "Tout ou rien" est sélectionné, l\'étudiant obtiendra 100% ou 0% de la note pour cette question, selon qu\'il a ou non obtenu une note parfaite sur le VPL.</li>
<li>Si "Proportionnel" est sélectionné, l\'étudiant obtiendra une note proportionnelle à celle du VPL.</li></ul>';
$string['lastservermessage'] = 'Dernier message reçu du serveur d\'exécution : {$a}';
$string['nogradeerror'] = 'Une erreur est survenue lors de l\'évaluation de cette question (pas de note obtenue). {$a}.';
$string['noprecheck'] = 'Pas de pré-évaluation';
$string['pleaseanswer'] = 'Merci de fournir une réponse.';
$string['possiblesolution'] = 'Solution proposée :';
$string['precheck'] = 'Pré-évaluer';
$string['precheckexecfiles'] = 'Fichiers d\'exécution pour la pré-évaluation';
$string['precheckexecfiles_help'] = 'Vous pouvez modifier ici les fichiers d\'exécution de la pré-évaluation. Pour plus d\'informations, voir l\'aide de "Fichiers d\'exécution".';
$string['precheckhasownfiles'] = 'La pré-évaluation utilise ses propres fichiers';
$string['precheckhassamefiles'] = 'La pré-évaluation utilise les mêmes fichiers que l\'évaluation';
$string['precheckhelp'] = 'évaluer votre réponse sur un sous-ensemble de tests';
$string['precheckisdebug'] = 'La pré-évaluation utilise Debug';
$string['precheckpreference'] = 'Préférences de pré-évaluation';
$string['precheckpreference_help'] = 'Détermine si l\'étudiant a accès au bouton "Pré-évaluation" lors de sa tentative (utilisation illimitée).
<ul><li>Si "Pas de pré-évaluation" est sélectionné, le bouton ne sera pas disponible.</li>
<li>Si "La pré-évaluation utilise Debug" est sélectionné, le bouton sera comme le bouton Debug du VPL. Veuillez noter que l\'interface graphique usuelle sera indisponible.</li>
<li>Si "La pré-évaluation utilise les mêmes fichiers que l\'évaluation" est sélectionné, le bouton évaluera la réponse avec les mêmes fichiers que ci-dessus.</li>
<li>Si "La pré-évaluation utilise ses propres fichiers" est sélectionné, vous pourrez éditer des fichiers d\'ecécution spécifiques qui seront utilisés pour la pré-évaluation. Cette option est recommandée, car elle vous permet de spécifier un sous-ensemble de tests auquel l\'étudiant aura accès durant sa tentative.</li></ul>';
$string['qvplbase'] = 'Base de la Question VPL';
$string['run'] = 'Exécuter';
$string['scaling'] = 'Proportionnel';
$string['selectavpl'] = '<a href="{$a}">Sélectionnez un VPL</a> pour éditer les fichiers d\'exécution.';
$string['serverwassilent'] = 'Le serveur d\'exécution était silencieux - aucun message reçu.';
$string['teachercorrection'] = 'Correction de l\'enseignant';
$string['teachercorrection_help'] = 'écrivez ici votre correction pour cette question.';
$string['templatecontext'] = 'éditer le code';
$string['templatecontext_help'] = 'Vous pouvez éditer ici le code qui sera exécuté (c\'est-à-dire le contenu du fichier requis).<br>
La balise "{{ANSWER}}" sera remplacée par la réponse de l\'étudiant. Vous pouvez la placer où vous le souhaitez, mais elle doit apparaître !';
$string['templatevpl'] = 'VPL à utiliser comme base';
$string['templatevpl_help'] = 'Sélectionnez le VPL sur lequel baser cette question.<br>
<b>Note :</b> Veuillez sélectionner un VPL dédié à cet effet, car les soumissions des étudiants sur ce VPL seront supprimées si le paramètre associé a été coché par l\'administrateur.';
$string['validateonsave'] = 'Valider';
$string['validateonsave_help'] = 'Si cette case est cochée, la correction sera testée avec les cas de tests avant la sauvegarde cette question.';
$string['vplnotavailablewarning'] = 'Attention ! Le VPL utilisé comme base par cette question n\'est pas disponible. La question peut ne pas fonctionner correctement.';
$string['vplnotfounderror'] = 'Erreur ! Le VPL utilisé comme base par cette question n\'a pas pu être instancié :<br>{$a}';
$string['vplnotincoursewarning'] = 'Attention ! Le VPL utilisé comme base par cette question ne se trouve pas dans ce cours. La question peut ne pas fonctionner correctement.';

$string['compilation'] = 'Compilation :';
$string['evaluation'] = 'évaluation :';
$string['evaluationerror'] = 'Erreur d\'évaluation :';
$string['execerror'] = 'Erreur d\'exécution :';
$string['execerrordetails'] = 'Operation abandonnée par le VPL. Les ressources d\'exécution maximum ont peut-être été dépassées.';
$string['execution'] = 'Erreur d\'exécution :';

$string['merge'] = 'Fusionner';
$string['overwrite'] = 'Ecraser';
$string['templatevplchange'] = 'Changement de VPL';
$string['templatevplchange_help'] = 'Le code du VPL utilisé comme base et les fichiers d\'exécution contiennent des données.<br>
Le changement du VPL de base écrasera ces données, sauf si vous décidez de fusionner le contenu actuel vers le nouveau.<br>
Veuillez noter que la fusion fonctionnera uniquement sur les fichiers ayant le même nom, les fichiers sans correspondance de nom seront écrasés.';
$string['templatevplchangeprompt'] = 'Que voulez-vous faire avec le contenu actuel du code du VPL de base et des fichiers d\'exécution ?';

$string['privacy:metadata'] = 'Le plugin Question VPL ne stocke aucune donnée personnelle. Cependant, il envoie des données entrées par l\'utilisateur au plugin mod_vpl, qui peut les stocker de son côté.';

$string['cfg:deletevplsubmissions'] = 'Supprimer les soumissions du VPL';
$string['cfg:deletevplsubmissions_help'] = 'Détermine si les soumissions faites par une Question VPL sur un VPL seront supprimées.';
$string['cfg:generalsettings'] = 'Paramètres généraux';
$string['cfg:generalsettings_help'] = '';
