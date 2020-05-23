import React, { Component } from 'react'
import { withTranslation, Translation, useTranslation } from 'react-i18next';
import styled from 'styled-components'
import bootstrap from 'react-bootstrap'
import {
    Table,
    TableData,
    TableHead
} from '../stylesheets/MutlilangStyle'


class Multilang extends Component {

    constructor(props) {
        console.log(props);
        super(props)
        // this.state = {
        //     t: props.t,            
        //     i18n: props.i18n
        // }
        // debugger;
        // console.log(Translation)
        // console.log(useTranslation)
    }

    render() {
        const t = this.props.t;
        const i = this.props.i18n;
       
        return (
            <div>
                <h1>List of Languages</h1>
                <Table bordered>
                    <thead>
                        <tr>
                            <TableHead>#</TableHead>
                            <TableHead>Key</TableHead>
                            <TableHead>Value</TableHead>
                            <TableHead>Language</TableHead>
                        </tr>
                    </thead>
                    <tbody>                        
                        <tr>
                            <TableData>1</TableData>
                            <TableData>title</TableData>
                            <TableData>{i.getDataByLanguage("en").translation["title"]}</TableData>
                            <TableData>EN</TableData>
                        </tr>
                        <tr>
                            <TableData>2</TableData>
                            <TableData>title</TableData>
                            <TableData>{i.getDataByLanguage("ch").translation["title"]}</TableData>
                            <TableData>CH</TableData>
                        </tr>                       
                        <tr>
                            <TableData>3</TableData>
                            <TableData>title</TableData>
                            <TableData>{i.getDataByLanguage("du").translation["title"]}</TableData>
                            <TableData>Dutch</TableData>
                        </tr>
                        <tr>
                            <TableData>4</TableData>
                            <TableData>title</TableData>
                            <TableData>{i.getDataByLanguage("fr").translation["title"]}</TableData>
                            <TableData>France</TableData>
                        </tr>
                        <tr>
                            <TableData>5</TableData>
                            <TableData>title</TableData>
                            <TableData>{i.getDataByLanguage("de").translation["title"]}</TableData>
                            <TableData>German</TableData>
                        </tr>
                        <tr>
                            <TableData>6</TableData>
                            <TableData>title</TableData>
                            <TableData>{i.getDataByLanguage("it").translation["title"]}</TableData>
                            <TableData>Italian</TableData>
                        </tr>
                        <tr>
                            <TableData>7</TableData>
                            <TableData>title</TableData>
                            <TableData>{i.getDataByLanguage("ru").translation["title"]}</TableData>
                            <TableData>Russian</TableData>
                        </tr>
                        <tr>
                            <TableData>8</TableData>
                            <TableData>title</TableData>
                            <TableData>{i.getDataByLanguage("jp").translation["title"]}</TableData>
                            <TableData>Japanese</TableData>
                        </tr>
                        <tr>
                            <TableData>9</TableData>
                            <TableData>title</TableData>
                            <TableData>{i.getDataByLanguage("latin").translation["title"]}</TableData>
                            <TableData>Latin</TableData>
                        </tr>
                        <tr>
                            <TableData>10</TableData>
                            <TableData>title</TableData>
                            <TableData>{i.getDataByLanguage("sp").translation["title"]}</TableData>
                            <TableData>Spanish</TableData>
                        </tr>
                    </tbody>
                </Table>
            </div>
        )
    }
}


export default withTranslation()(Multilang)