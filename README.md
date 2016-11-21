# Code Mine Portfolio

Build: [![CircleCI](https://circleci.com/gh/Code-Mine-Development/CodeMine-Website-Web-Application/tree/master.svg?style=svg&circle-token=7e3419f46f5afafe893146e7d8da2da88971d441)](https://circleci.com/gh/Code-Mine-Development/CodeMine-Website-Web-Application/tree/master)

## Conventions

1. Routing for modules should be implemented with respect for specification outlined in Angular 2 Guidelines https://angular.io/docs/ts/latest/guide/router.html
Each routing configuration should be specified in separate module that is dedicated to base module of given feature set. 

2. Each component should define it's own styles

3. Services and Pipes must have tests

4. Each commit message needs to contain issue number from [Jira](http://jira.code-mine.com/secure/RapidBoard.jspa?rapidView=23) (CMW-X)
 
5. For issues that are part of Story new feature branch must be created for entire story 



## Testing

For karma testing run 
`$ ng test`

Edge to Edge tests are conducted via 

`$ ng e2e` 


## Build

To prepare package run:
`$ ng build` 



