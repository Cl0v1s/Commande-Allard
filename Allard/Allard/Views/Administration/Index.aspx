<%@ Page Title="" Language="C#" MasterPageFile="~/Views/Layout.Master" AutoEventWireup="true" CodeBehind="Index.aspx.cs" Inherits="Allard.Views.Administration.Index" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder" runat="server">
    <div>
        <h1>Actions</h1>
        <span>
            <a href="/Views/Administration/ArticleCreate.aspx" class="button">Rédiger un nouvel article</a>
        </span>
    </div>
    <div>
        <h1>Administration des Articles</h1>
        <table>
            <thead>
                <tr>
                    <td>Titre</td>
                    <td>Date</td>
                    <td>Auteur</td>
                    <td>Action</td>
                </tr>
            </thead>
            <tbody id="Articles" runat="server">
            </tbody>
        </table>
    </div>
    
</asp:Content>
