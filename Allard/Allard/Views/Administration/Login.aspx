<%@ Page Title="" Language="C#" MasterPageFile="~/Views/Layout.Master" AutoEventWireup="true" CodeBehind="Login.aspx.cs" Inherits="Allard.Views.Administration.Login" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <title>Connexion</title>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder" runat="server">

    <div class="panel" title="Authentification">
        <div class="login">
            <h2>Login</h2>
            <asp:TextBox ID="LoginField" runat="server"></asp:TextBox>
            <h2>Mot de passe</h2>
            <asp:TextBox ID="Password" TextMode="Password" runat="server"></asp:TextBox>
            <br />
            <asp:Button ID="Submit" runat="server" OnClick="Submit_Click" Text="Envoyer" />
        </div>
    </div>

</asp:Content>
