<template>
    <div class="products">
        <div class="container">
            <div class="container h-100">
                <div class="intro h-100">
                    
                     <div class="row h-100 justify-content-center align-items-center">
                        
                        <div class="col-md-6">
                            <h3>Products Page</h3>
                            <p>this is a small description.</p>
                        </div>
                        
                        <div class="col-md-6">
                            <img src="/img/svg/products.svg" alt="" class="img-fluid">
                        </div>
                    </div> 
                </div>

                <hr>
                <h3>Basic CRUD in firebase and vue</h3>
                <div class="product-test">
                    <div class="form-group">
                        <input type="text" placeholder="Product Name" v-model="product.name" class="form-control">
                    </div>

                    <div class="form-group">
                        <input type="text" placeholder="Price" v-model="product.price" class="form-control">
                    </div>

                    <div class="form-group">
                        <button @click="saveData" class="btn btn-primary">Save Data</button>
                    </div>

                    <hr>

                    <h3>Products list</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="product in products" :key="product.id">
                                <td>{{ product.name }}</td>
                                <td>{{ product.price }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            
        </div>
        
        </div>
        
        
    </div>
</template>

<script>

import {fb, db } from '../firebase'

export default {
    name:"Pviewview",

    props: {
        msg: String
    }, 

    data(){
        return {

            products:[],
            product:{
                name:null,
                price:null
            } 
            
        }
    },
    methods:{

        readData(){
            db.collection("products").get().then((querySnapshot) => {
                 querySnapshot.forEach((doc) => {
                    this.products.push(doc.data())
                    });
             });
        },
        saveData(){
            db.collection("products").add(this.product)
            .then((docRef) => {
                console.log("Document writtern with ID: ", docRef.id)
                
            })
            .catch(function(error) {
                console.error("Error adding document: ", error);
            });
        }
    },
    reset(){
        Object.assign(this.$data, this.$options.data.apply(this));
    },

    created(){
        this.readData();
    }
}
</script>

<style lang="scss" scoped>

</style>