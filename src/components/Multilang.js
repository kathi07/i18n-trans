import React, { Component } from 'react'
import { withTranslation, Translation, useTranslation } from 'react-i18next';
import styled from 'styled-components'
import bootstrap from 'react-bootstrap'
import table from 'react-bootstrap/table'


import {
    Table,
    TableData,
    TableHead
} from '../stylesheets/MutlilangStyle'


class Multilang extends Component {

    constructor(props) {
        console.log(props);
        super(props)
        this.state = {
            //     t: props.t,            
            //     i18n: props.i18n
            // }
            // debugger;
            // console.log(Translation)
            // console.log(useTranslation)
            langs: [],
            keys: [],
            i18n : props.i18n
        }
    }

    getHeader(value) {
        return <TableHead>{value}</TableHead>
    }
    getCell(value) {
        return <TableData>{value}</TableData>
    }

    getTRs(key, index) {
        let tds = []
        debugger;
        this.state.langs.map(lang => {
            tds.push(this.getCell(this.state.i18n.getDataByLanguage(lang).translation[key]))
        })
        return <tr>
            {this.getCell(index + 1)}
            {this.getCell(key)}
            {tds}
        </tr>
    }



    render() {

        // const { langs, keys } = this.state;
        const langs = Object.keys(this.state.i18n.store.data);
        let keys = []
        // This is to get all the unique keys into array
        langs.map(lang => {
            keys = keys.concat(Object.keys(this.state.i18n.store.data[lang].translation).filter((item) => keys.indexOf(item) < 0))
        });

        this.state.langs = langs;
        this.state.keys = keys;

        let ths = []
        this.state.langs.map(lang => {
            ths.push(this.getHeader(lang))
        })

        let trs = []
        this.state.keys.map((key, index) => {
            trs.push(this.getTRs(key, index))
        })

        return (
            <div class="table-responsive">
                <h1>List of Languages</h1>
                <Table class="table">
                    <thead>
                        <tr>
                            <TableHead>#</TableHead>
                            <TableHead>Key</TableHead>
                            {ths}
                        </tr>
                    </thead>
                    <tbody>
                        {trs}
                    </tbody>
                </Table>
            </div>
        )
    }
}


export default withTranslation()(Multilang)