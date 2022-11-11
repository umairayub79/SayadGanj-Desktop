import React from 'react'
import { BaseModal } from './BaseModal'
import { Table } from '../Table'
export const InfoModal = ({ isOpen, handleClose }) => {


    // table 1 data
    const columns = ['رِد', 'گْونڈگال', 'سرجم گال'] // Same columns will be used for 3 tables
    const data1 = [{
        num: '۱',
        short: "انگ",
        long: "انگریزی"
    }, {
        num: '۲',
        short: "پا",
        long: "پارسی"
    },
    {
        num: '۳',
        short: "پھ",
        long: "پھلوی"
    },
    {
        num: '۴',
        short: "ستا",
        long: "اوستا"
    },
    {
        num: '۵',
        short: "سن",
        long: "سنسکرت"
    },
    {
        num: '۶',
        short: "سند",
        long: "سندی"
    },
    {
        num: '۷',
        short: "گیل",
        long: "گیلککی"
    },
    {
        num: '۸',
        short: "فب",
        long: "فارسی باستان"
    },
    {
        num: '۹',
        short: "ھن",
        long: "ھندی"
    },]

    // table 2 data
    const data2 = [{
        num: '۱',
        short: "اک",
        long: "انچوس کہ"
    }, {
        num: '۲',
        short: "پ ک",
        long: "پیش چہ کرستانی"
    },
    {
        num: '۳',
        short: "س م",
        long: "سنٹی میٹر"
    },
    {
        num: '۴',
        short: "بَت",
        long: "بَتَل"
    }]

    // table 3 data
    const data3 = [{
        num: '۱',
        short: "ب۔ق",
        long: "برھان قطع: محمد حسین بن خلف تبریزی"
    }, {
        num: '۲',
        short: "سغ",
        long: "سفدی"
    },
    {
        num: '۳',
        short: "شیرازی",
        long: "گِسی زبان گال کہ چہ ”فرھنگ عامیانہ شیراز“ ءَ حسین امداد ءِ وانگی ”شیراز“ ءِ بزاات ءَ اِنت ،زیرگ بوتگ"
    },
    {
        num: '۴',
        short: "طب",
        long: "طبری (واژنامہ طبری)"
    }]

    // Symbols table
    const columnsSymbols = ['رِد', 'ٹِک', 'بزانت']
    const dataSymbols = [{
        num: '۱',
        short: "★",
        long: "گیش کُرتگیں گال ءَ بزانتانی گُڈ سرءَ جنگ بوتگ۔"
    }, {
        num: '۲',
        short: "✷",
        long: "گیش کرتگیں بزانتانی بنگیج ءَکارمرز بوتگ۔"
    },
    {
        num: '۳',
        short: "✪",
        long: "ھماگال کہ سید ھاشمی ءَ بنشتگ انت بلے بزانت نبشتگ نہ کرتگ انت آیانی گُڈ سرَ اے ٹِک جنگ بوتگ"
    }]

  
    return (
        <BaseModal title={'رھشونی'} isOpen={isOpen} isScrollable={true} handleClose={handleClose} >
            <div className='text-center items-center content-center'>
                <div className="text-xl text-gray-500 dark:text-gray-300">
                    <p>گْونڈگل ءُ ٹِک کہ ماں اے بزانت بلد ءَ پہ اشارہ ءَ کار مرزبوتگ اَنت</p>
                </div>

                <div>
                    <h2>زابان</h2>
                    <Table columns={columns} data={data1} />
                </div>
                <div>
                    <h2>وانگی</h2>
                    <p>
                    بلوچی بُنی کتاب (عبدالرحمان باکر / عاقل خان مینگل ) :BKK
                    </p>
                    <p>
                        PPB.LW D: Popular Poetry of the Baloches by M.Longworth Dames
                    </p>
                    <p>
                        VMB: Vocabulary of Marri Baloch
                    </p>
                </div>
                <div>
                    <h2>گال</h2>
                    <Table columns={columns} data={data2} />
                </div>
                <div>
                    <h2>بزانت بلد</h2>
                    <Table columns={columns} data={data3} />
                </div>
                <div>
                    <h2>ٹِک</h2>
                    <Table columns={columnsSymbols} data={dataSymbols} />
                </div>
            </div>
        </BaseModal>
    )
}