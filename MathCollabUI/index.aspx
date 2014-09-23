<%@ Page Title="" Language="C#" MasterPageFile="~/Layout.master" AutoEventWireup="true" CodeFile="index.aspx.cs" Inherits="index" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
    <header>        
        <div class="container">
            <div class="row">
                <div class="col-lg-5">
                    <h1>MathCollab</h1>
                    <h2>Real-Time Collaborative Math Whiteboard</h2>                
                </div>
                <div class="col-lg-6">
                    <h3>MathCollab is a free and easy to use whiteboard for saving and sharing math formulas.</h3>
                    <h3>
                        <button type="button" class="btn btn-primary btn-lg">Log In</button>                    
                        <button type="button" class="btn btn-primary btn-lg">Sign Up</button>
                    </h3>                    
                </div>
            </div>        
        </div>
    </header>

    <div class="container info">
        <div class="row">
            <div class="col-lg-6 col-sm-6">
                <h2 class="section-heading">Homework in the cloud</h2>
                <ul>
                    <li>Build formulas and equations</li>
                    <li>Save your work and review it later</li>
                    <li>Share with friends and classmates</li>                    
                </ul>
            </div>
            <div class="col-lg-6 col-sm-6 pull-right">
                <h2 class="section-heading">Fast and always free</h2>
                <ul>
                    <li>Intuitive and easy to use interface</li>
                    <li>Built with the latest web technologies</li>
                    <li>Open Source Software (MIT License)</li>                    
                </ul>
            </div>
        </div>
    </div>

</asp:Content>

