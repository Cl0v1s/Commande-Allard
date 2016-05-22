<%@ Page Title="" Language="C#" MasterPageFile="~/Views/Layout.Master" AutoEventWireup="true" CodeBehind="Articles.aspx.cs" Inherits="Allard.Views.Articles.Articles" %>

<%@ Register Src="ArticleItem.ascx" TagName="ArticleItem" TagPrefix="uc1" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder" runat="server">
    <div id="Articles">
        <div class="Articles-list">
            <asp:ListView ID="ArticlesList" runat="server">
                <ItemTemplate>
                    <uc1:ArticleItem runat="server" Article="<%# Container.DataItem %>" />
                </ItemTemplate>
            </asp:ListView>
        </div>
    </div>
</asp:Content>
