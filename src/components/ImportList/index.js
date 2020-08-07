import React, { useState } from 'react';
import { Button, Container, Row, Col, Media, Form, Table } from "react-bootstrap";
import { Link } from 'react-router-dom';
import './index.css';

function ImportListDatas() {

    const [detailsImportLists, setDetailsImportLists] = useState(Boolean);
    const [variantsLists, setVariantsLists] = useState(Boolean);
    let [activeImportList, setActiveImportList] = useState(Boolean);
    let [checkAll, setCheckAll] = useState(Boolean);

    // OBJ FOR DEFAULT IMPORT LIST VALUE ONLY PRODUCT IS TO TRUE BECAUSE FIRST ELEM ACTIVE
    const detailsImportList = {
        product: true,
        description: false,
        variants: false,
        images: false,
        marketing: false
    }

    const variantsList = {
        useall: true,
        sku: false,
        color: false,
        cost: false,
        shipping: false,
        price: false
    }

    // FUNCTION WHO'LL PERMITTED US TO OUTPUT OUR IMPORT LIST BY CHANGING THE BOOLEAN
    function handleShowImportList(name) {
        const detailsImportLists = { ...detailsImportList };
        for (let key in detailsImportLists) {
            detailsImportLists[key] = false;
        }
        detailsImportLists[name] = true;
        setDetailsImportLists(detailsImportLists);

    }

    function handleCheck(check) {
        checkAll = true;
        setCheckAll(checkAll);

    }




    // TAB FOR ALL MY LISTS NAME
    const listName = [
        {
            id: 1,
            iconList: "",
            nameList: "Product",
            isActived: true
        },
        {
            id: 2,
            iconList: "",
            nameList: "Description",
            isActived: false
        },
        {
            id: 3,
            iconList: "",
            nameList: "Variants",
            isActived: false
        },
        {
            id: 4,
            iconList: "",
            nameList: "Images",
            isActived: false
        },
        {
            id: 5,
            iconList: "",
            nameList: "Marketing",
            isActived: false
        }
    ]

    // BUTTON OF ALL IMPORT LIST
    const btnList = listName.map(({ id, iconList, nameList, isActived }) => {

        activeImportList = isActived;
        return (
            <div key={id} className="data" onClick={() => handleShowImportList(`${nameList.toLowerCase()}`)} >
                <div className={!isActived ? `lists-data  ` : 'lists-data '}>
                    <h6 className="icon-list">{iconList}</h6>
                    <p className="name-list">{nameList}</p>
                </div>
            </div >

        )
    })

    // COMPONENT FOR IMPORT LIST

    function Product(props) {
        // DESTRUCTURE THE PROPS AND ASSIGN IT TRUE IN ORDER TO ACTIVE THE FIRST IMPORT LIST WHO IS PRODUCT
        let { isDisplayed = true } = props;
        if (!isDisplayed) return false;

        return (
            <div className="block-data-list">
                <Container>
                    <div className="d-flex">
                        <Col className="" xs={5} md={3}>
                            <Media>
                                <img
                                    width={230}
                                    height={230}
                                    className="align-self-end"
                                    src="https://ae01.alicdn.com/kf/HTB13UIXV6DpK1RjSZFrq6y78VXaN/Paquet-de-5-brosses-dents-en-bambou-pour-adultes-soies-souples-cologiques-cepillo-dientes-bambu-brosse.jpg"
                                    alt="Ecologic toothbrush"
                                />
                            </Media>

                        </Col>
                        <Col xs={9} md={9}>
                            <Media>
                                <Media.Body>
                                    <div className="d-flex justify-content-between">
                                        <p><b>Original title</b></p>
                                        <Link to="/">View original product ></Link>
                                    </div>

                                    <p>New design mixed color bamboo toothbrush eco friendly wooden tooth brush soft bristle tip charcoal adults oral care toothbrush.
                                    </p>

                                    <p>By : <Link to="/">Bamboo World</Link>, <Link to="/"> Store (AliExpress)</Link></p>


                                    <Form>
                                        <Form.Group>
                                            <Form.Label><b>Change the title</b></Form.Label>
                                            <Form.Control type="text" value="New design mixed color bamboo toothbrush eco friendly wooden tooth brush soft bristle tip charcoal adults oral care toothbrush." />
                                            <Form.Label className="mt-4"><b>Collections</b></Form.Label>
                                            <Form.Control type="text" placeholder="Search for collections" />

                                            <Row className="d-flex  mt-4">
                                                <Col>
                                                    <Form.Label><b>Type</b></Form.Label>
                                                    <Form.Control type="text" placeholder="Select type" />
                                                </Col>
                                                <Col>
                                                    <Form.Label><b>Tags</b></Form.Label>
                                                    <Form.Control type="text" placeholder="Search for tags" />
                                                </Col>
                                            </Row>
                                        </Form.Group>
                                    </Form>
                                </Media.Body>
                            </Media>

                        </Col>
                    </div>

                </Container>
            </div>
        )
    }

    function Description(props) {
        return (
            <Media className="block-data-list">
                <Media.Body>
                    <h2>Description</h2>
                </Media.Body>
            </Media>
        )
    }

    function Variants(props) {

        const arrayVariantList = [
            {
                id: 1,
                name: "Use all",
                width: "12%"
            },
            {
                id: 2,
                name: "SKU",
                width: "18%"
            },
            {
                id: 3,
                name: "Color",
                width: "18%"
            },
            {
                id: 4,
                name: "Cost",
                width: "8%"
            },
            {
                id: 5,
                name: "Shipping",
                width: "15%"
            },
            {
                id: 6,
                name: "Price",
                width: "18%"
            }
        ];

        const variantsDataTable = [
            {
                id: 1,
                useAllImg: "https://ae01.alicdn.com/kf/HTB13UIXV6DpK1RjSZFrq6y78VXaN/Paquet-de-5-brosses-dents-en-bambou-pour-adultes-soies-souples-cologiques-cepillo-dientes-bambu-brosse.jpg",
                useAllAlt: "img brush",
                useAllWidth: "12%",
                skuValue: "22752863-7-holds",
                skuWidth: "18%",
                colorValue: "7 Holds",
                colorWidth: "18%",
                costYen: "¥ 27.31",
                costUs: "US $3.91",
                costWidth: "8%",
                shippingText: "N/A",
                shippingWidth: "15%",
                priceYenValue: "¥ 7.82",
                priceWidth: "18%"
            },
            {
                id: 2,
                useAllImg: "https://ae01.alicdn.com/kf/HTB13UIXV6DpK1RjSZFrq6y78VXaN/Paquet-de-5-brosses-dents-en-bambou-pour-adultes-soies-souples-cologiques-cepillo-dientes-bambu-brosse.jpg",
                useAllAlt: "img brush",
                useAllWidth: "12%",
                skuValue: "22752863-circular",
                skuWidth: "18%",
                colorValue: "Circular",
                colorWidth: "18%",
                costYen: "¥ 21.72",
                costUs: "US $3.11",
                costWidth: "8%",
                shippingText: "N/A",
                shippingWidth: "15%",
                priceYenValue: "¥ 6.22",
                priceWidth: "18%"
            },
            {
                id: 3,
                useAllImg: "https://ae01.alicdn.com/kf/HTB13UIXV6DpK1RjSZFrq6y78VXaN/Paquet-de-5-brosses-dents-en-bambou-pour-adultes-soies-souples-cologiques-cepillo-dientes-bambu-brosse.jpg",
                useAllAlt: "img brush",
                useAllWidth: "12%",
                skuValue: "22752863-flower",
                skuWidth: "18%",
                colorValue: "Flower",
                colorWidth: "18%",
                costYen: "¥ 21.72",
                costUs: "US $3.11",
                costWidth: "8%",
                shippingText: "N/A",
                shippingWidth: "15%",
                priceYenValue: "¥ 6.22",
                priceWidth: "18%"
            },
            {
                id: 4,
                useAllImg: "https://ae01.alicdn.com/kf/HTB13UIXV6DpK1RjSZFrq6y78VXaN/Paquet-de-5-brosses-dents-en-bambou-pour-adultes-soies-souples-cologiques-cepillo-dientes-bambu-brosse.jpg",
                useAllAlt: "img heart",
                useAllWidth: "12%",
                skuValue: "22752863-heart",
                skuWidth: "18%",
                colorValue: "Heart",
                colorWidth: "18%",
                costYen: "¥ 21.72",
                costUs: "US $3.11",
                costWidth: "8%",
                shippingText: "N/A",
                shippingWidth: "15%",
                priceYenValue: "¥ 6.22",
                priceWidth: "18%"
            }
        ]

        return (
            <Media>
                <Media.Body>
                    <Row>
                        <div className="d-flex mt-4">
                            <div className="block-icon"></div>
                            <div className="block-txt ml-3">
                                <h5>Suggested price : ¥104.71</h5>
                                <p>Businesses in your industry are selling these products for a similar price.</p>

                            </div>
                        </div>
                    </Row>
                    <Row>
                        <Container className="d-flex mt-4 mb-4">
                            <div className="txt-automatically-update">
                                <p>Automatically update price when cost changes</p>
                                <p className="text-primary mt-0 ">Manage auto update settings (disabled)</p>
                            </div>
                            <div className="btn-disabled-activated">Btn</div>
                        </Container>
                    </Row>
                    <Row className="w-900">
                        <Table striped hover className="cursor-pointer">
                            <thead>
                                <tr>
                                    {arrayVariantList.map(({ id, name, width }) => {
                                        if (id === 1) {
                                            return (

                                                <th style={{ width: { width } }} key={id}>
                                                    <div className="d-flex align-items-center">
                                                        <input type="checkbox" className="mr-2" id="selectAll" onClick={() => handleCheck()} />
                                                        {name}
                                                    </div>
                                                </th>

                                            )
                                        }
                                        return (
                                            <th style={{ width: { width } }} key={id}>{name}</th>
                                        )
                                    })}
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td colSpan="4"></td>
                                    <td>Aland islands</td>
                                    <td>Change all my prices</td>
                                </tr>
                                {variantsDataTable.map((data) => {
                                    console.log(data)
                                    return (
                                        <tr key={data.id}>
                                            <td style={{ width: `${data.useAllWidth}` }}>
                                                <Media>
                                                    <div className="d-flex align-items-center">
                                                        <input type="checkbox" className="mr-2" />
                                                        <img
                                                            width={60}
                                                            height={60}
                                                            className="align-self-end"
                                                            src={data.useAllImg}
                                                            alt={data.useAllAlt}
                                                        />
                                                    </div>
                                                </Media>
                                            </td>

                                            <td style={{ width: `${data.skuWidth}` }} className="padding">
                                                <Form.Control type="text" value={data.skuValue} />
                                            </td>
                                            <td style={{ width: `${data.colorWidth}` }} className="padding">
                                                <Form.Control type="text" value={data.colorValue} />
                                            </td>
                                            <td style={{ width: `${data.costWidth}`, fontSize: "15px" }} className="padding">
                                                <div className="yan-cost"><b>{data.costYen}</b></div>
                                                <div className="us-cost">{data.costUs}</div>
                                            </td>
                                            <td style={{ width: `${data.shippingWidth}` }} className="padding">
                                                <b>{data.shippingText}</b>
                                            </td>
                                            <td style={{ width: `${data.priceWidth}` }} className="padding">
                                                <Form.Control type="text" value={data.priceYenValue} />
                                            </td>
                                        </tr>
                                    )

                                })}
                            </tbody>

                        </Table>
                    </Row>

                </Media.Body>
            </Media>

        )
    }

    function Images(props) {
        return (
            <Container className="block-data-list">
                <Row>
                    <div className="d-flex justify-items-center">
                        <Col xs={12} md={6}>
                            <div className="block-big-img-product">
                                <div className="block-validate-product">
                                    <img src="https://www.edumilestones.com/ccis/static/tick_icon.png" alt="" className="icon-product" />
                                </div>
                                <img src="https://media.but.fr/images_produits/produit-niv3/3216383128683_Q.jpg" alt="" className="img-product" />
                            </div>
                        </Col>


                        <Row className="block-content">
                            <Col xs={6} md={5} className="mb-4">
                                <div className="block-little-img-product">
                                    <div className="block-validate-product">
                                        <img src="https://www.edumilestones.com/ccis/static/tick_icon.png" alt="" className="icon-product" />
                                    </div>
                                    <img src="https://media.but.fr/images_produits/produit-niv3/3216383128683_Q.jpg" alt="" className="img-product" />
                                </div>
                            </Col>
                            <Col xs={6} md={5} className="mb-4">
                                <div className="block-little-img-product">
                                    <div className="block-validate-product">
                                        <img src="https://www.edumilestones.com/ccis/static/tick_icon.png" alt="" className="icon-product" />
                                    </div>
                                    <img src="https://media.but.fr/images_produits/produit-niv3/3216383128683_Q.jpg" alt="" className="img-product" />
                                </div>
                            </Col>
                            <Col xs={6} md={5}>
                                <div className="block-little-img-product mb-4">
                                    <div className="block-validate-product">
                                        <img src="https://www.edumilestones.com/ccis/static/tick_icon.png" alt="" className="icon-product" />
                                    </div>
                                    <img src="https://media.but.fr/images_produits/produit-niv3/3216383128683_Q.jpg" alt="" className="img-product" />
                                </div>
                            </Col>
                            <Col xs={6} md={5}>
                                <div className="block-little-img-product mb-4">
                                    <div className="block-validate-product">
                                        <img src="https://www.edumilestones.com/ccis/static/tick_icon.png" alt="" className="icon-product" />
                                    </div>
                                    <img src="https://media.but.fr/images_produits/produit-niv3/3216383128683_Q.jpg" alt="" className="img-product" />
                                </div>
                            </Col>

                            <Col xs={6} md={5}>
                                <div className="block-little-img-product mb-4">
                                    <div className="block-validate-product">
                                        <img src="https://www.edumilestones.com/ccis/static/tick_icon.png" alt="" className="icon-product" />
                                    </div>
                                    <img src="https://media.but.fr/images_produits/produit-niv3/3216383128683_Q.jpg" alt="" className="img-product" />
                                </div>
                            </Col>
                            <Col xs={6} md={5}>
                                <div className="block-little-img-product mb-4">
                                    <div className="block-validate-product">
                                        <img src="https://www.edumilestones.com/ccis/static/tick_icon.png" alt="" className="icon-product" />
                                    </div>
                                    <img src="https://media.but.fr/images_produits/produit-niv3/3216383128683_Q.jpg" alt="" className="img-product" />
                                </div>
                            </Col>


                        </Row>

                    </div>

                </Row>

            </Container>
        )
    }


    function Marketing(props) {
        return (
            <Media className="block-data-list">
                <Media.Body>
                    <h2>Marketing</h2>
                </Media.Body>
            </Media>
        )
    }


    return (
        <div id="section-lists" className="ml-5 mr-4">
            <div className="d-flex justify-content-center">
                {btnList}
                <div className="block-btns ml-5">
                    <Button className="mr-3 bg-pink border-none border-radius-none">Remove</Button>
                    <Button variant="danger bg-green border-none border-radius-none">Import to store</Button>
                </div>
            </div>
            <div className="line-row"></div>

            <Product isDisplayed={detailsImportLists.product} />
            {detailsImportLists.description && (<Description />)}
            {detailsImportLists.variants && (<Variants />)}
            {detailsImportLists.images && (<Images />)}
            {detailsImportLists.marketing && (<Marketing />)}

        </div>
    )

}

export default ImportListDatas;
